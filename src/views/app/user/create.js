import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import {
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
    Input
} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import {config, multipartConfig} from "../../../config/env";
import {Link} from "react-router-dom";
import DropzoneExample from "../../../containers/forms/DropzoneExample";


const initialState = {
    name: '',
    email:'',
    password: '',
    confirmPassword:'',
    phoneNumber:'',
    image:'',
    loading: false,
    errors:{},
}
export default class CreateOrganization extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    handleValidation = () => {
        const {name,password,email,phoneNumber,image,confirmPassword} = this.state;
        let nameValidation = {
            message: 'Name is Required',
            status: false
        };
        // let emailValidation;
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // if (!pattern.test(email)) {
          let  emailValidation = {
                message: 'email is required',
                status: false
            };
        // }
        let PhoneValidation = {
            message: 'Phone number is required',
            status: false
        };
        let ImageValidation = {
            message: 'Image is required',
            status: false
        };
        let passwordValidation = {
            message: 'password is required',
            status: false
        };
        let ConfirmPassword = {
            message: 'password is required',
            status: false
        };

        let passed = {
            status: true
        };
        return name !== ''?
            image === ''? ImageValidation :
            email === '' ? emailValidation :
            password === '' ? passwordValidation :
            confirmPassword === '' ? ConfirmPassword :
            phoneNumber === '' ? PhoneValidation :
                passed : nameValidation
    }
    createUser = async (e)=> {
        e.preventDefault();
        const {name,email,image,password,confirmPassword,phoneNumber} = this.state;
        let validation = this.handleValidation();
        if(validation){
            let data = new FormData()
            data.append('name',name)
            data.append('email',email)
            data.append('password',password)
            data.append('phone_number',phoneNumber)
            data.append('image',image)

            if(password !== confirmPassword){
                window.alert("The passwords doesn't match")
                return false;
            } else {
                this.setState({loading: true});
                let response = await ApiCall.post(Url.CREATE_USER, data, await multipartConfig());
                console.log(response, 'create respon')
                if (response.status === 200) {
                    this.setState(initialState);
                    this.props.history.push('/app/user/view')
                    return NotificationManager.success(
                        "User Stored Successfully",
                        "Success",
                        3000,
                        null,
                        null,
                        'filled'
                    );
                } else {
                    this.setState({loading: false});
                }
            }
            }
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onFileRemove = (item)=>{
        if(item){
            this.setState({
                image: '',
            })
        }
    };
    onImageChange = (file) => {
        this.setState({
            image: file
        })
    };

    render() {
        const {name,address,password,confirmPassword,phoneNumber} = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/categories/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="menu.create" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Col xxs="10">
                        <div className='col-sm-12 col-lg-10 col-xs-12 '>
                        <Card>
                            <div className="position-absolute card-top-buttons">
                            </div>
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="categories-create" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={this.createUser}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={name} onChange={this.handleInputChange} name="name" placeholder={'Enter name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            Email
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="email"   value={address} onChange={this.handleInputChange} name="email" placeholder={'Enter Address *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            Phone Number
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="number"   value={phoneNumber} onChange={this.handleInputChange} name="phoneNumber" placeholder={'Enter Phone number *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            Password
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="password" value={password} onChange={this.handleInputChange} name="password" placeholder={'Enter the Password *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                           Confirm Password
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="password" value={confirmPassword} onChange={this.handleInputChange} name="confirmPassword" placeholder={'Reenter the Password *'} required/>
                                        </Colxx>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm="3">
                                            {/*<IntlMessages id="categories-type"/>*/}
                                            Profile Picture
                                        </Label>
                                        <Colxx sm="9">
                                            <DropzoneExample
                                                fileTypes={'image/*'}
                                                removeFile={this.onFileRemove}
                                                onChange={this.onImageChange}
                                            />
                                        </Colxx>
                                    </FormGroup>
                                    <Button className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`} color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                                        <span className="label"><IntlMessages id="categories-create" /></span>
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                        </div>
                    </Col>

                </Row>
            </Fragment>
        )
    }
}
