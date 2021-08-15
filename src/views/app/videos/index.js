import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const UploadVideo = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './upload')
);
const HomeVideoTranslations = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './HomeTranslations')
);
const CourseVideoTranslations = React.lazy(() =>
    import(/* webpackChunkName: "create-client" */ './CourseTranslations')
);


const UploadVideos = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/upload`}
                render={props => <UploadVideo {...props} />}
            />
            <Route
                path={`${match.url}/translations/home/:id`}
                render={props => <HomeVideoTranslations {...props} />}
            />
            <Route
                path={`${match.url}/translations/course/:id`}
                render={props => <CourseVideoTranslations {...props} />}
            />
            {/*<Route*/}
            {/*    path={`${match.url}/edit/:id`}*/}
            {/*    render={props => <UpdateUser {...props} />}*/}
            {/*/>*/}
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default UploadVideos;