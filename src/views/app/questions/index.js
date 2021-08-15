import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const CreateQuestion = React.lazy(() => import(/* webpackChunkName: "create-guide" */ './create'));
const UpdateQuestion = React.lazy(() => import(/* webpackChunkName: "create-guide" */ './edit'));
const AllQuestion = React.lazy(() => import(/* webpackChunkName: "create-guide" */ './view'));

const Guides = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/view`}
                render={props => <AllQuestion {...props} />}
            />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateQuestion {...props} />}
            />
            <Route
                path={`${match.url}/edit/:id`}
                render={props => <UpdateQuestion {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Guides;
