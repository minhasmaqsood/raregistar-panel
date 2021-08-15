import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Row,} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import {NotificationManager} from "../../../components/common/react-notifications";
import {config} from "../../../config/env";
// import { confirmAlert } from 'react-confirm-alert';
import {Link} from "react-router-dom";
import {Table} from "rsuite";
import '../table.css';
import DataTradesTable from "../../../components/DataTradesTable";
import TranslationsModal from "../settings/trasnlations-modal";
import {confirmAlert} from "react-confirm-alert";

const { Column, HeaderCell, Cell,  } = Table;

export default class CourseTranslations extends Component {
    constructor() {
        super();
        this.state = {
            translationContent: '',
            loading: false,
            languages: [],
            entityId: '',
            translations: [],
            spinning: true,
            selectedLanguage: null,
            translationId: null,
            modalMethod: '',
            loadingApi: false,
            showModal: false,
            //Pagination
            displayLength: 10,
            page: 1
        };
    }


    componentDidMount() {
        this._isMounted = false
        this.getEmailTemplates();
    };

    getEmailTemplates = async ()=> {
        this.setState({spinning: true});
        if(!this._isMounted){
            let response = await ApiCall.get(`${Url.GET_TEMPLATES_TRANSLATIONS}/${this.props.match.params.id}`, await config())
            if(response.status=== 200){
                this.setState({
                    languages: response.data.languages,
                    entityId: this.props.match.params.id,
                    translations: response.data.translations,
                    spinning: false
                });
            }
        }

    };
    componentWillUnmount() {
        this._isMounted = true
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleChangeContent = (content) => {
        this.setState({content});
    };
    handleChangePage = (dataKey) => {
        this.setState({
            page: dataKey
        });
    };
    handleChangeLength = (dataKey) => {
        this.setState({
            page: 1,
            displayLength: dataKey
        });
    };
    getData = () => {
        const {displayLength, page, translations} = this.state;
        return translations.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };
    handleSelectLanguage = (e) => {
        this.setState({
            selectedLanguage: e.target.value
        })
    };
    handleChangeTranslationContent = (translationContent) => {
        this.setState({translationContent});
    };
    toggle = (item) => {
        this.setState({
            showModal: !this.state.showModal
        })
        if (item.id) {
            this.setState({
                translationContent: item.body[0].content,
                selectedLanguage: item.language_id,
                modalMethod: 'update',
                translationId: item.id
            })
        }else {
            this.setState({
                translationContent: '',
                selectedLanguage: '',
                modalMethod: 'store'
            })
        }
    };
    storeTranslation = async () => {
        const {selectedLanguage, translationContent, entityId} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            this.setState({loadingApi: true})
            let response = await ApiCall.post(Url.UPDATE_TEMPLATES_TRANSLATIONS, {
                language_id: selectedLanguage,
                entity_id:  entityId,
                content: translationContent
            }, await config())
            if(response.status === 200){

                this.setState({
                    showModal: false,
                    loadingApi: false
                })
                this.getEmailTemplates();
                return NotificationManager.success(
                    "Translation Stored Successfully",
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            }else {
                this.setState({
                    loadingApi: false
                })
            }
        }else {
            return NotificationManager.error(
                validation.message,
                "Error",
                3000,
                null,
                null,
                'filled'
            );
        }
    };
    updateTranslation = async () => {
        const {selectedLanguage, translationContent, entityId, translationId} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            this.setState({loadingApi: true})
            let response = await ApiCall.post(Url.UPDATE_TEMPLATES_TRANSLATIONS, {
                language_id: selectedLanguage,
                entity_id:  entityId,
                content: translationContent,
                id: translationId
            }, await config())
            if(response.status === 200){

                this.setState({
                    showModal: false,
                    loadingApi: false
                })
                this.getEmailTemplates();
                return NotificationManager.success(
                    "Translation Updated Successfully",
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            }else {
                this.setState({
                    loadingApi: false
                })
            }
        }else {
            return NotificationManager.error(
                validation.message,
                "Error",
                3000,
                null,
                null,
                'filled'
            );
        }
    };
    handleValidation = () => {
        const {selectedLanguage, translationContent,} = this.state;
        let languageValidation = {
            message: 'Please Select Language',
            status: false
        };
        let contentValidation = {
            message: 'Please write translation content',
            status: false
        };
        let passed = {
            status: true
        };
        return selectedLanguage !== null?
            selectedLanguage === ""? languageValidation :
                selectedLanguage === "Please Select Language"? languageValidation :
                    translationContent === ""? contentValidation :
                        translationContent === "<p><br></p>"? contentValidation :
                            passed
            : languageValidation

    };
    render() {
        const data = this.getData()
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">

                        <div className="text-zero top-right-button-container">
                            <Link to='/app/settings/email-templates'><Button size='lg' color={'secondary'}>Go Back</Button></Link>
                        </div>
                        <Breadcrumb heading="faq.view" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Col>
                        <Card className="h-100">
                            <CardBody>
                                {/*<div className='d-flex justify-content-left align-items-center mb-5'>*/}
                                {/*    Question:*/}
                                {/*</div>*/}
                                <CardTitle>
                                    {this.state.entityId === "1"? "Data Trades Register":
                                        this.state.entityId === "2"? "IronFx Register": "VIP Member"
                                    }

                                    Translations | <Button size='xs' color='primary'
                                                           onClick={this.toggle}>Add</Button>
                                </CardTitle>
                                <DataTradesTable
                                    activePage={this.state.activePage}
                                    displayLength={this.state.displayLength}
                                    total={this.state.translations.length}
                                    onChangePage={this.handleChangePage}
                                    onChangeLength={this.handleChangeLength}
                                    data={data}
                                    loading={this.state.spinning}
                                >
                                    <Column width={100} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex + 1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.language_id === 2 ? "French" : "Dutch"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    {/*<Button color="danger" size="xs" className="mb-2"*/}
                                                    {/*        onClick={() => this.deleteTranslation(rowData.id)}*/}
                                                    {/*>*/}
                                                    {/*    <IntlMessages id="delete"/>*/}
                                                    {/*</Button>*/}
                                                    <Button color="secondary" size="xs" className="mb-2" onClick={()=>this.toggle(rowData)}>
                                                        <IntlMessages id="edit"/>
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </DataTradesTable>
                                {this.state.showModal &&
                                <TranslationsModal
                                    showModal={this.state.showModal}
                                    toggle={this.toggle}
                                    languages={this.state.languages}
                                    handleSelectLanguage={this.handleSelectLanguage}
                                    selectedLanguage={this.state.selectedLanguage}
                                    storeTranslation={this.storeTranslation}
                                    updateTranslation={this.updateTranslation}
                                    loadingApi={this.state.loadingApi}
                                    storeEmailTemplates={this.storeTranslation}
                                    translationContent={this.state.translationContent}
                                    handleChangeEmailTranslationContent={this.handleChangeTranslationContent}
                                    modalMethod={this.state.modalMethod}
                                />
                                }
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Fragment>
        )
    }
}
