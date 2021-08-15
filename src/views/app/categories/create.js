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
    selectedType: '',
    loading: false,
    // url: '',
    image: ''
}
export default class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    handleValidation = () => {
        const {name, image} = this.state;
        let nameValidation = {
            message: 'Name is Required',
            status: false
        };
        let ImageValidation = {
            message: 'Image is required',
            status: false
        };
        let passed = {
            status: true
        };
        return name !== ''?
            image === ''? ImageValidation :
                passed : nameValidation
    }
    createCategory = async (e)=> {
        e.preventDefault();
        const {image,name} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
        const data = new FormData();
        data.append('name',name)
        data.append('image',image)
                this.setState({loading: true});
                let response = await ApiCall.post(Url.CREATE_CATEGORY, data, await multipartConfig());
                console.log(response,'respponse')
                if (response.status === 200) {
                    this.setState(initialState);
                    this.props.history.push('/app/categories/view')
                    return NotificationManager.success(
                        "Category Stored Successfully",
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
    onImageChange = (file) => {
        this.setState({
            image: file
        })
    };
    onFileRemove = (item)=>{
        if(item){
            this.setState({
                image: '',
                // url: ''
            })
        }
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        const {name, selectedType} = this.state;
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
                                <Form className="dashboard-quick-post" onSubmit={this.createCategory}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={name} onChange={this.handleInputChange} name="name" placeholder={'Name of category *'} required/>
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
