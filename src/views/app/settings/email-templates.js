import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Label, Row} from "reactstrap";

import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import {NotificationManager} from "../../../components/common/react-notifications";
import {config} from "../../../config/env";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";


const quillModules = {
    toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"}
        ],
        ["link", "image"],
        ["clean"]
    ]
};
const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
];
const initialState = {
    dataTradesRegister: '',
    dataTradesRegisterId: null,
    ironFxRegisterId: null,
    vipMemberId: null,
    ironFxRegister: '',
    vipMember: '',
    loading: false,
    spinning: true,

}
export default class EmailTemplates extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    componentDidMount() {
        this.getEmailTemplates();
    }

    getEmailTemplates = async () => {
        this.setState({
            spinning: true,
        })
        let response = await ApiCall.get(Url.GET_TEMPLATES, await config());
        if (response.status === 200) {
            this.setState({
                dataTradesRegister: response.data.mailingTemplates ?
                    response.data.mailingTemplates.datatrades_register.value : "",
                dataTradesRegisterId: response.data.mailingTemplates ?
                    response.data.mailingTemplates.datatrades_register.id : null,
                ironFxRegister: response.data.mailingTemplates ?
                    response.data.mailingTemplates.ironfx_register.value : "",
                ironFxRegisterId: response.data.mailingTemplates ?
                    response.data.mailingTemplates.ironfx_register.id : null,
                vipMember: response.data.mailingTemplates ?
                    response.data.mailingTemplates.vip_member.value : "",
                vipMemberId: response.data.mailingTemplates ?
                    response.data.mailingTemplates.vip_member.id : null,
                spinning: false
            })
        }
    };
    updateEmailTemplates = async (e) => {
        e.preventDefault();
        const {
            dataTradesRegister,
            ironFxRegister,
            vipMember
        } = this.state;
        let validation = this.handleValidation();
        if (validation.status) {
            this.setState({loading: true});
            let response = await ApiCall.post(Url.UPDATE_TEMPLATE, {
                datatrades_register: dataTradesRegister,
                ironfx_register: ironFxRegister,
                vip_member: vipMember
            }, await config());
            if (response.status === 200) {
                this.getEmailTemplates();
                this.setState({loading: false});
                return NotificationManager.success(
                    "Templates Updated Successfully",
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {
                this.setState({loading: false});
            }
        } else {
            return NotificationManager.error(
                validation.message,
                "Error",
                3000,
                null,
                null,
                'filled'
            );
        }

        // console.log(response)

    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    handleValidation = () => {
        const {
            dataTradesRegister,
            ironFxRegister,
            vipMember
        } = this.state;
        let dataTradesRegisterValidation = {
            message: 'Please Provide Data Trades Registration Template Content',
            status: false
        };
        let ironFxRegisterValidation = {
            message: 'Please Provide Iron Fx Register Template Content',
            status: false
        };
        let vipMemberValidation = {
            message: 'Please Provide VIP Member Template Content',
            status: false
        };
        let passed = {
            status: true
        };
        return dataTradesRegister !== "" ?
            dataTradesRegister === "<p><br></p>" ? dataTradesRegisterValidation :
                ironFxRegister === "" ? ironFxRegisterValidation :
                    ironFxRegister === "<p><br></p>" ? ironFxRegisterValidation :
                        vipMember === "" ? vipMemberValidation :
                            vipMember === "<p><br></p>" ? vipMemberValidation :
                                passed
            : dataTradesRegisterValidation

    };

    dataTradesRegisterChange = (dataTradesRegister) => {
        this.setState({dataTradesRegister});
    };
    ironFxRegisterChange = (ironFxRegister) => {
        this.setState({ironFxRegister});
    };
    vipMemberChange = (vipMember) => {
        this.setState({vipMember});
    };

    render() {
        const {
            dataTradesRegister,
            ironFxRegister,
            vipMember,
            dataTradesRegisterId,
            ironFxRegisterId,
            vipMemberId,
            spinning
        } = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.email-template" match={this.props.match}/>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>
                {spinning ? <div className="loading"/> :
                    <Row>
                        <Col xxs="12">
                            <div className='col-sm-12 col-lg-12 col-xs-12 '>
                                <Card>
                                    <div className="position-absolute card-top-buttons">
                                    </div>
                                    <CardBody>
                                        <CardTitle>
                                            Email Templates
                                        </CardTitle>
                                        <Form className="dashboard-quick-post" onSubmit={this.updateEmailTemplates}>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    Data Trades Register {" | "}
                                                    <Link
                                                        to={`/app/settings/email-templates/translations/${dataTradesRegisterId}`}>
                                                        <Button size='xs' type="button"
                                                                color='primary'
                                                                style={{color: 'white'}}
                                                        >
                                                            Translation
                                                        </Button>
                                                    </Link>
                                                </Label>
                                                <Colxx sm="12">
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={dataTradesRegister}
                                                        onChange={this.dataTradesRegisterChange}
                                                        modules={quillModules}
                                                        formats={quillFormats}/>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    IronFx Register {" | "}
                                                    <Link
                                                        to={`/app/settings/email-templates/translations/${ironFxRegisterId}`}>
                                                        <Button size='xs' type="button"
                                                                color='primary'
                                                                style={{color: 'white'}}
                                                        >
                                                        Translation
                                                        </Button>
                                                    </Link>


                                                </Label>
                                                <Colxx sm="12">
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={ironFxRegister}
                                                        onChange={this.ironFxRegisterChange}
                                                        modules={quillModules}
                                                        formats={quillFormats}/>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    VIP Member {" | "}
                                                    <Link
                                                        to={`/app/settings/email-templates/translations/${vipMemberId}`}>
                                                        <Button size='xs' type="button"
                                                                color='primary'
                                                                style={{color: 'white'}}
                                                        >
                                                            Translation
                                                        </Button>
                                                    </Link>

                                                </Label>
                                                <Colxx sm="12">
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={vipMember}
                                                        onChange={this.vipMemberChange}
                                                        modules={quillModules}
                                                        formats={quillFormats}/>
                                                </Colxx>
                                            </FormGroup>
                                            <Button className={`float-right btn-shadow btn-multiple-state 
                                        ${this.state.loading ? "show-spinner" : ""}`}
                                                    color="primary"
                                            >
                                        <span className="spinner d-inline-block">
                                        <span className="bounce1"/>
                                        <span className="bounce2"/>
                                        <span className="bounce3"/>
                                        </span>
                                                <span className="label"><IntlMessages id="save"/></span>
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
