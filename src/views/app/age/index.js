import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const CreateAge = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './create')
);
const UpdateAge = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './edit')
);
const AllAges = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './view')
);
const Translation = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './translations')
);

const Categories = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/view`}
                render={props => <AllAges {...props} />}
            />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateAge {...props} />}
            />
            <Route
                path={`${match.url}/edit/:slug`}
                render={props => <UpdateAge {...props} />}
            />
            <Route
                path={`${match.url}/translations/:id`}
                render={props => <Translation {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Categories;
