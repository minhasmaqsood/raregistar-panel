import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const CreateUser = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './create')
);
const UpdateUser = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './edit')
);
const AllUser = React.lazy(() =>
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
                render={props => <AllUser {...props} />}
            />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateUser {...props} />}
            />
            <Route
                path={`${match.url}/edit/:slug`}
                render={props => <UpdateUser {...props} />}
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
