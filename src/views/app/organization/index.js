import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const CreateOrganization = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './create')
);
const UpdateOrganization = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './edit')
);
const AllOrganization = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './view')
);
const Translation = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './translations')
);

const Organization = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/view`}
                render={props => <AllOrganization {...props} />}
            />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateOrganization {...props} />}
            />
            <Route
                path={`${match.url}/edit/:slug`}
                render={props => <UpdateOrganization {...props} />}
            />
            <Route
                path={`${match.url}/translations/:id`}
                render={props => <Translation {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Organization;
