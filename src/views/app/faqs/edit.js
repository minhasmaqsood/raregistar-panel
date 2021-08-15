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
    question: '',
    answer: '',
    id: '',
    spinning: true,
    loading: false
}
export default class UpdateFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
componentDidMount() {
    this._isMounted = false
    this.getSingleFaqData()
}
getSingleFaqData = async () => {
    this.setState({spinning: true});
    let response = await ApiCall.get(`${Url.EDIT_FAQ}/${this.props.match.params.slug}`, await config());
    if (response.status === 200) {
        if(!this._isMounted){
            this.setState({
                question: response.data.faq.questions,
                answer: response.data.faq.answers,
                id: response.data.faq.id,
                spinning: false
            });
        }
    }
}

    updateFaq = async (e)=> {
        e.preventDefault();
        const {question, answer, id} = this.state;
        this.setState({loading: true});
        let response = await ApiCall.post(Url.UPDATE_FAQ, {
            questions: question,
            answers: answer,
            id: id
        }, await config());
        if(response.status === 200){
            this.setState(initialState);
            this.props.history.push('/app/faqs/view')
            return  NotificationManager.success(
                "FAQ updated Successfully",
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


    render() {
        const {question, answer,spinning} = this.state;
        return (
            <Fragment>
                <Row>

                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/faqs/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="faq.edit" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                {spinning? <div className={'loading'}/> : <Row>
                    <Col xxs="10">
                        <div className='col-sm-12 col-lg-10 col-xs-12 '>
                            <Card>
                                <div className="position-absolute card-top-buttons">
                                </div>
                                <CardBody>
                                    <CardTitle>
                                        <IntlMessages id="faq.update-faq" />
                                    </CardTitle>
                                    <Form className="dashboard-quick-post" onSubmit={this.updateFaq}>
                                        <FormGroup row>
                                            <Label sm="3">
                                                <IntlMessages id="faq.question" />
                                            </Label>
                                            <Colxx sm="9">
                                                <Input type="text" value={question} onChange={this.handleInputChange} name="question" placeholder={'Question *'} required/>
                                            </Colxx>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm="3">
                                                <IntlMessages id="faq.answer" />
                                            </Label>
                                            <Colxx sm="9">
                                                <Input type="textarea" value={answer} onChange={this.handleInputChange} name="answer" placeholder={'Answer *'} required/>
                                            </Colxx>
                                        </FormGroup>
                                        <Button className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`} color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                                            <span className="label"><IntlMessages id="faq.update" /></span>
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                </Row>}

            </Fragment>
        )
    }
}
