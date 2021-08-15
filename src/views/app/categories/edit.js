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
    id: null,
    loading: false,
    spinning: false,
    image:'',
    url:''
}
export default class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this._isMounted = false
        this.getSingleCategoryData();
    }
    componentWillUnmount() {
        this._isMounted = true
    }
    getSingleCategoryData = async () => {
        this.setState({spinning: true});
        let response = await ApiCall.get(`${Url.SINGLE_CATEGORY}/${this.props.match.params.slug}`, await multipartConfig());
        if (response.status === 200) {
            if(!this._isMounted){
                this.setState({
                    name: response.data.category.name,
                    id: response.data.category._id,
                    image:response.data.category.image,
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


    updateCategory = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name',this.state.name);
        data.append('image',this.state.image);
        data.append('category_id',this.props.match.params.slug)
        const {image} = this.state;
        if(image === ""){
            return  NotificationManager.error(
                "Image is required",
                "Error",
                2000,
                null,
                null,
                'filled'
            );
        }else {
            this.setState({loading: true});
            let response = await ApiCall.post(Url.UPDATE_CATEGORY, data, await config());
            console.log(response,'respponse')
            if (response.status === 200) {
                this.setState(initialState);
                this.props.history.push('/app/categories/view')
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
    onImageChange = (file) => {
        console.log(file)
        this.setState({
            image: file
        })
    };
    onFileRemove = (item)=>{
        if(item){
            this.setState({
                image: '',
                url: ''
            })
        }
    };

    render() {
        const {name, spinning, selectedType} = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/categories/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
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
                                    <Form className="dashboard-quick-post" onSubmit={this.updateCategory}>
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
                                            <span className="label"><IntlMessages id="category.update"/></span>
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
