import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const TermsAndConditions = React.lazy(()=>
    import('./terms')
);

const PrivacyPolicy = React.lazy(()=>
    import('./privacy')
);

const Security = React.lazy(()=>
    import('./security')
);

const EmailTemplates = React.lazy(()=>
    import('./email-templates')
);
const UpdateCountryCodes = React.lazy(()=>
    import('./countries')
);
const Translation = React.lazy(() => import( './templates-translations'));


const Settings = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/privacy-policy`} />
            <Route
                path={`${match.url}/privacy-policy`}
                render={props => <PrivacyPolicy {...props} />}
            />
            <Route
                path={`${match.url}/security`}
                render={props => <Security {...props} />}
            />
            <Route
                path={`${match.url}/email-templates/translations/:id`}
                render={props => <Translation {...props} />}
            />
            <Route
                path={`${match.url}/update-countries`}
                render={props => <UpdateCountryCodes {...props} />}
            />
            <Route
                path={`${match.url}/email-templates`}
                render={props => <EmailTemplates {...props} />}
            />
            <Route
                path={`${match.url}/terms-and-conditions`}
                render={props => <TermsAndConditions {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Settings;