import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

// const Dashboards = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './dashboards')
// );
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const Chat = React.lazy(()=> import('./Chat/chat'));
const Dashboard = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './dashboard/dashboard.js')
);
const Categories = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './categories')
);
const Guides = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './guides')
);
const Settings = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './settings')
);
const FAQS = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './faqs')
);
const Partners = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './partners')
);
const ContactUs = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './contact')
);
const Signals = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './Signals')
);
const Results = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './result')
);
const VIPRegistrations = React.lazy(() =>
    import(/* webpackChunkName: "dashboards" */ './VIP-Registration/view')
);
const AllNotifications = React.lazy(()=> import('./all-notifications'));
// const Users = React.lazy(()=> import('./users'));
const AdminProfile = React.lazy(()=> import('./admin-profile'));
const UploadVideo = React.lazy(()=> import('./videos'));
const Age = React.lazy(()=> import('./age'));
const Organization = React.lazy(()=> import('./organization'));
const Users = React.lazy(()=> import('./user'));
const Competition = React.lazy(()=> import('./competition'));
const Advert = React.lazy(()=>import('./advert'))
const Question = React.lazy(()=> import('./questions'));
class App extends Component {
  componentDidMount() {
    if(!localStorage.userToken){
      this.props.history.push('/user/login')
    }
  }
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboard`}
              />
              <Route
                  path={`${match.url}/chat`}
                  render={props => <Chat {...props} />}
              />
              <Route
                  path={`${match.url}/age`}
                  render={props => <Age {...props} />}
              />
              <Route
                  path={`${match.url}/organization`}
                  render={props => <Organization {...props} />}
              />
              <Route
                  path={`${match.url}/user`}
                  render={props => <Users {...props} />}
              />
              <Route
                  path={`${match.url}/advert`}
                  render={props => <Advert {...props} />}
              />
              <Route
                  path={`${match.url}/competition`}
                  render={props => <Competition {...props} />}
              />
              <Route
                  path={`${match.url}/question`}
                  render={props => <Question {...props} />}
              />
              <Route
                  path={`${match.url}/video`}
                  render={props => <UploadVideo {...props} />}
              />
              <Route
                  path={`${match.url}/profile`}
                  render={props => <AdminProfile {...props} />}
              />
              <Route
                  path={`${match.url}/notifications`}
                  render={props => <AllNotifications {...props} />}
              />
              <Route
                  path={`${match.url}/vip-registrations`}
                  render={props => <VIPRegistrations {...props} />}
              />
              <Route
                  path={`${match.url}/results`}
                  render={props => <Results {...props} />}
              />
              {/*<Route*/}
              {/*    path={`${match.url}/users`}*/}
              {/*    render={props => <Users {...props} />}*/}
              {/*/>*/}
              <Route
                  path={`${match.url}/vip-signals`}
                  render={props => <Signals {...props} />}
              />
              <Route
                  path={`${match.url}/categories`}
                  render={props => <Categories {...props} />}
              />
              <Route
                  path={`${match.url}/faqs`}
                  render={props => <FAQS {...props} />}
              />
              <Route
                  path={`${match.url}/contact`}
                  render={props => <ContactUs {...props} />}
              />
              <Route
                  path={`${match.url}/partners`}
                  render={props => <Partners {...props} />}
              />
              <Route
                  path={`${match.url}/guides`}
                  render={props => <Guides {...props} />}
              />
              <Route
                  path={`${match.url}/settings`}
                  render={props => <Settings {...props} />}
              />
              <Route
                path={`${match.url}/dashboard`}
                render={props => <Dashboard {...props} />}
              />
              <Route
                path={`${match.url}/applications`}
                render={props => <Applications {...props} />}
              />
              <Route
                path={`${match.url}/pages`}
                render={props => <Pages {...props} />}
              />
              <Route
                path={`${match.url}/ui`}
                render={props => <Ui {...props} />}
              />
              <Route
                path={`${match.url}/menu`}
                render={props => <Menu {...props} />}
              />
              <Route
                path={`${match.url}/blank-page`}
                render={props => <BlankPage {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
