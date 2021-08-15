import React, { Component, Fragment } from "react";
import {Row, Col} from "reactstrap";
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
    rows: [],
    heading: '',
    subTitle: '',
    total: '',
    id: null,
    loading: false,
    spinning: true
}
export default class UpdateResult extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    componentDidMount() {
        this._isUnmounted = false
        // this.getSingleResultData();
    }
    getSingleResultData = async () => {
        if(!this._isUnmounted){
            let response = await ApiCall.get(`${Url.RESULT_EDIT}/${this.props.match.params.id}`, await config());
            // console.log(response)
            if(response.status === 200){
                this.setState({
                    rows: response.data.result.details,
                    heading: response.data.result.heading,
                    subTitle: response.data.result.sub_heading,
                    total: response.data.result.total,
                    id: response.data.result.id,
                    spinning: false
                })
            }
        }
    }
componentWillUnmount() {
        this._isUnmounted = true
}

    updateResult = async (e)=> {
        e.preventDefault();

        const { rows, heading, subTitle, total, id } = this.state;
        this.setState({loading: true});
        let response = await ApiCall.post(Url.RESULT_UPDATE, {
            id: id,
            details: rows,
            heading: heading,
            sub_heading: subTitle,
            total: total,
        }, await config());
        if(response.status === 200){
            this.setState(initialState);
            this.props.history.push('/app/results/view')
            return  NotificationManager.success(
                "Result Update Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        }else {
            this.setState({loading: false});
        }
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleAttributeChange = (e) => {
        this.setState({
            isActive: e.target.checked
        })
    }

    handleRowsAttributeChange = (event, index) => {
        if(event.target.name === 'position'){
            let rows = this.state.rows;
            rows[index].position = event.target.value;
            this.setState({ rows })
        }
        if(event.target.name === 'action'){
            let rows = this.state.rows;
            rows[index].action = event.target.value;
            this.setState({ rows })
        }
        if(event.target.name === "isActive"){
            let rows = this.state.rows;
            rows[index].isActive = event.target.checked;
            this.setState({ rows })
        }
    };

    removeRowClick =(index) => {
        let rows = [...this.state.rows];
        rows.splice(index, 1);
        this.setState({rows});
    };

    addRowsInput =() => {
        let rows = {'position':'',
            // 'action': '', 'isActive': true
        };
        this.setState(prevState => ({rows: [...prevState.rows, rows]}));
    };

    AddResultList = () => {
        return this.state.rows.map((el, index) => (
            <div key={index}>
                <Row>
                    <Col xs='10'>
                        <FormGroup>
                            <Colxx sm="12">
                                <Input type="text" value={this.state.rows[index].position} onChange={(e) => this.handleRowsAttributeChange(e, index)} name="position" placeholder={'Position *'} required/>
                            </Colxx>
                        </FormGroup>
                    </Col>
                    {/*<Col xs='10'>*/}
                    {/*    <FormGroup>*/}
                    {/*        <Colxx sm="12">*/}
                    {/*            <Input type="text" value={this.state.rows[index].action} onChange={(e) => this.handleRowsAttributeChange(e, index)} name="action" placeholder={'Action *'} required/>*/}
                    {/*        </Colxx>*/}
                    {/*    </FormGroup>*/}
                    {/*</Col>*/}
                    {/*<Col xs='10'>*/}
                    {/*    <FormGroup>*/}
                    {/*        <Colxx sm="12">*/}
                    {/*            <CustomInput*/}
                    {/*                type="checkbox"*/}
                    {/*                key={index}*/}
                    {/*                name='isActive'*/}
                    {/*                checked={this.state.rows[index].isActive}*/}
                    {/*                onChange={(e) => this.handleRowsAttributeChange(e, index)}*/}
                    {/*                id={index}*/}
                    {/*                label={'isActive'}*/}
                    {/*            />*/}
                    {/*        </Colxx>*/}
                    {/*    </FormGroup>*/}
                    {/*</Col>*/}
                    <div className="col-md-2">
                        <div className="form-group">
                            <Button
                                color='danger'
                                size={'sm'}
                                onClick={() => {
                                    this.removeRowClick(index);
                                }}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </Row>
                {/*<hr />*/}
            </div>
        ));
    };

    render() {
        const {heading, subTitle, total, spinning} = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/results/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="menu.edit" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                {spinning? <div className='loading'/> :
                    <Row>
                        <Col xxs="10">
                            <div className='col-sm-12 col-lg-10 col-xs-12 '>
                                <Card>
                                    <div className="position-absolute card-top-buttons">
                                    </div>
                                    <CardBody>
                                        <CardTitle>
                                            <IntlMessages id="updateResult" />
                                        </CardTitle>
                                        <Form className="dashboard-quick-post" onSubmit={this.updateResult}>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    <IntlMessages id="heading" />*
                                                </Label>
                                                <Colxx sm="9">
                                                    <Input type="text" value={heading} onChange={this.handleInputChange} name="heading" placeholder={'Heading *'} required/>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    <IntlMessages id="subTitle" />*
                                                </Label>
                                                <Colxx sm="9">
                                                    <Input type="text" value={subTitle} onChange={this.handleInputChange} name="subTitle" placeholder={'Sub Title *'} required/>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label  sm="3">
                                                    <IntlMessages id="rows" />*
                                                </Label>
                                                <Colxx sm="9">
                                                    {this.AddResultList()}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={() => this.addRowsInput()}
                                                    >
                                                        <IntlMessages id="addNew"/>
                                                    </button>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    <IntlMessages id="total" />*
                                                </Label>
                                                <Colxx sm="9">
                                                    <Input type="text" value={total} onChange={this.handleInputChange} name="total" placeholder={'Total *'} required/>
                                                </Colxx>
                                            </FormGroup>
                                            <Button className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`} color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                                                <span className="label"><IntlMessages id="update" /></span>
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>

                    </Row>
                }
            </Fragment>
        )
    }
}
