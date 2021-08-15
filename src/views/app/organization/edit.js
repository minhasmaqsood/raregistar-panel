import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from "../../../config/network";
import Url from "../../../config/api";
import {config, multipartConfig} from "../../../config/env";
import {NotificationManager} from "../../../components/common/react-notifications";
import {Link} from "react-router-dom";
import DropzoneExample from "../../../containers/forms/DropzoneExample";

const initialState = {
    name: '',
    website:'',
    address: '',
    image:'',
    id: null,
    loading: false,
    spinning: false,

}
export default class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this._isMounted = false
        this.getSingleOrganizationData();
    }
    componentWillUnmount() {
        this._isMounted = true
    }
    getSingleOrganizationData = async () => {
        this.setState({spinning: true});
        let response = await ApiCall.get(`${Url.SINGLE_ORGANIZATION}/${this.props.match.params.slug}`, await multipartConfig());
        console.log(response)
        if (response.status === 200) {
            if(!this._isMounted){
                this.setState({
                    name: response.data.organization.name,
                    address: response.data.organization.address,
                    website: response.data.organization.website,
                    image: response.data.organization.image,
                    id: response.data.organization._id,
                    spinning: false
                });
            }

        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleValidation = () => {
        const {name,website,address,image} = this.state;
        let nameValidation = {
            message: 'Name is Required',
            status: false
        };
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
        return name !== ''?
            image === ''? ImageValidation :
                website === '' ? websiteValidation :
                    address === '' ? AddressValidation :
                        passed : nameValidation
    }
    updateOrganization = async (e) => {
        e.preventDefault();
        const {name,website,image,address} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            let data = new FormData()
            data.append('website',website)
            data.append('name',name)
            data.append('address',address)
            data.append('image',image)
            data.append('image',image)
            data.append('organization_id',this.props.match.params.slug)
            this.setState({loading: true});
            let response = await ApiCall.post(Url.UPDATE_ORGANIZATION,
                data, await config());

            if (response.status === 200) {
                this.setState(initialState);
                this.props.history.push('/app/organization/view')
                return NotificationManager.success(
                    "Category Updated Successfully",
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

    render() {
        const {name, spinning, address,website} = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/organization/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="category.edit" match={this.props.match}/>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>
                <Row>
                    <Col xxs="10">
                        <div className='col-sm-12 col-lg-10 col-xs-12 '>
                        {spinning ? <div className="loading"/> :
                            <Card>
                                <div className="position-absolute card-top-buttons">
                                </div>
                                <CardBody>
                                    <CardTitle>
                                        <IntlMessages id="category.update"/>
                                    </CardTitle>
                                    <Form className="dashboard-quick-post" onSubmit={this.updateOrganization}>
                                        <FormGroup row>
                                            <Label sm="3">
                                                <IntlMessages id="name"/>
                                            </Label>
                                            <Colxx sm="9">
                                                <Input type="text" value={name} onChange={this.handleInputChange}
                                                       name="name" placeholder={'Name *'} required/>
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
                                                    url={this.state.url}
                                                    removeFile={this.onFileRemove}
                                                    onChange={this.onImageChange}
                                                />
                                            </Colxx>
                                        </FormGroup>
                                        <Button
                                            className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                                            color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block"><span className="bounce1"/><span className="bounce2"/><span className="bounce3"/></span>
                                            {/*<span className="label"><IntlMessages id="category.update"/></span>*/}
                                            <span className="label">Update Organization</span>
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        }
                        </div>
                    </Col>

                </Row>
            </Fragment>
        )
    }
}
