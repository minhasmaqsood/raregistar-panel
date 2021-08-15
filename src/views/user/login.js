import React, { Component } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "../../components/common/react-notifications";
import { Formik, Form, Field } from "formik";
import { loginUser } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import ApiCall from '../../config/network';
import Url from '../../config/api';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: {status: false, message: ''}
    };
  }

  onUserLogin =async (values) => {
    if (!this.props.loading) {
      if (values.email !== "" && values.password !== "") {
        this.setState({loading: true});
        let response = await ApiCall.post(Url.LOGIN_USER, {
          email: values.email,
          password: values.password
        })

        if (response.status === 200){
          this.setState({loading: false, error: {status: false, message: ''}});
          localStorage.setItem('userToken', response.data.token);
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          this.props.history.push('/')
        }else {
          this.setState({loading: false});
          return  NotificationManager.error(
              "Invalid Credentials",
              "Login Error",
              3000,
              null,
              null,
              'filled'
          );
        }
        // console.log(response)
      }
    }
  }

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your password";
    }
    return error;
  }

  componentDidMount() {
    if(localStorage.userToken){
      this.props.history.push('/')
    }
  }

  componentDidUpdate() {
    if (this.state.error.status ===true) {
      // console.log(this.state.error.message)
    }
  }

  render() {
    const { password, email } = this.state;
    const initialValues = {email,password};

    return (
        <Row className="h-100">
          <Colxx xxs="12" md="10" className="mx-auto my-auto">
            <Card className="auth-card">
              <div className="position-relative image-side ">
                <p className="text-white h2">Raregisters Admin Panel</p>
                <p className="white mb-0">
                  Please use your credentials to login.
                </p>
              </div>
              <div className="form-side">
                <NavLink to={`/`} className="black">
                  <h2 className={'mb-3'}>Raregisters</h2>
                  {/*<span className="logo-single" />*/}
                </NavLink>
                <CardTitle className="mb-4">
                  <IntlMessages id="user.login-title" />
                </CardTitle>

                <Formik
                    initialValues={initialValues}
                    onSubmit={this.onUserLogin}>
                  {({ errors, touched }) => (
                      <Form className="av-tooltip tooltip-label-bottom">
                        <FormGroup className="form-group has-float-label">
                          <Label>
                            <IntlMessages id="user.email" />
                          </Label>
                          <Field
                              className="form-control"
                              name="email"
                              validate={this.validateEmail}
                          />
                          {errors.email && touched.email && (
                              <div className="invalid-feedback d-block">
                                {errors.email}
                              </div>
                          )}
                        </FormGroup>
                        <FormGroup className="form-group has-float-label">
                          <Label>
                            <IntlMessages id="user.password" />
                          </Label>
                          <Field
                              className="form-control"
                              type="password"
                              name="password"
                              validate={this.validatePassword}
                          />
                          {errors.password && touched.password && (
                              <div className="invalid-feedback d-block">
                                {errors.password}
                              </div>
                          )}
                        </FormGroup>
                        <div className="d-flex justify-content-between align-items-center">
                          {/*<NavLink to={`/user/forgot-password`}>*/}
                          {/*  <IntlMessages id="user.forgot-password-question" />*/}
                          {/*</NavLink>*/}
                          <Button
                              color="primary"
                              className={`btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                              size="lg"
                          >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                            <span className="label"><IntlMessages id="user.login-button" /></span>
                          </Button>
                        </div>
                      </Form>
                  )}
                </Formik>
              </div>
            </Card>
          </Colxx>
        </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(
    mapStateToProps,
    {
      loginUser
    }
)(Login);
