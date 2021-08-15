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
import {config} from "../../../config/env";
import {Link} from "react-router-dom";
import DropzoneExample from "../../../containers/forms/DropzoneExample";


const initialState = {
    name: '',
    website:'',
    address: '',
    image:'',
    loading: false,
}
export default class CreateOrganization extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    handleValidation = () => {
        const {website,address,image} = this.state;
        let websiteValidation = {
            message: 'website is required',
            status: false
        };
        let ImageValidation = {
            message: 'Image is required',
            status: false
        };
        let AddressValidation = {
            message: 'Image is required',
            status: false
        };
        let passed = {
            status: true
        };
        return image === ''?
                website === '' ? websiteValidation :
                address === '' ? AddressValidation :
                passed : ImageValidation
    }
    createOrganization = async (e)=> {
        e.preventDefault();
        const {name,website,image,address} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            let data = new FormData()
            data.append('website',website)
            data.append('name',name)
            data.append('address',address)
            data.append('image',image)

                this.setState({loading: true});
                let response = await ApiCall.post(Url.CREATE_ORGANIZATION, data, await config());
                console.log(response,'create respon')
                if (response.status === 200) {
                    this.setState(initialState);
                    this.props.history.push('/app/organization/view')
                    return NotificationManager.success(
                        "Organization Stored Successfully",
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
        const {name,address,website,image} = this.state;
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
                                <Form className="dashboard-quick-post" onSubmit={this.createOrganization}>
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
                                            Address
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="textarea"   value={address} onChange={this.handleInputChange} name="address" placeholder={'Enter Address *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            Website
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={website} onChange={this.handleInputChange} name="website" placeholder={'Enter Website *'} required/>
                                        </Colxx>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm="3">
                                            {/*<IntlMessages id="categories-type"/>*/}
                                            Image
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
