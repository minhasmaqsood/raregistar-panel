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


const initialState = {
    name: '',
    loading: false,
}
export default class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    handleValidation = () => {
        const {name} = this.state;
        let nameValidation = {
            message: 'Name is Required',
            status: false
        };
        let passed = {
            status: true
        };
        return name !== ''?
                passed : nameValidation
    }
    assignAge = async (e)=> {
        e.preventDefault();
        const {name} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
                this.setState({loading: true});
                let response = await ApiCall.post(Url.CREATE_AGE, {name}, await config());

                if (response.status === 200) {
                    this.setState(initialState);
                    this.props.history.push('/app/age/view')
                    return NotificationManager.success(
                        "Age Stored Successfully",
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


    render() {
        const {name} = this.state;
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
                                <Form className="dashboard-quick-post" onSubmit={this.assignAge}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={name} onChange={this.handleInputChange} name="name" placeholder={'Enter name *'} required/>
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
