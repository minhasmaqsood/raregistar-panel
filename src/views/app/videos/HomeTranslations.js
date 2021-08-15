import React, { Component, Fragment } from "react";
import {Row, Col, CardBody, CardTitle,  Card, Button, } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import {config} from "../../../config/env";
// import { confirmAlert } from 'react-confirm-alert';
import {Link} from "react-router-dom";
import {Table} from "rsuite";
import '../table.css';
import DataTradesTable from "../../../components/DataTradesTable";
import TranslationsModal from "../settings/trasnlations-modal";
import {confirmAlert} from "react-confirm-alert";

const { Column, HeaderCell, Cell,  } = Table;

export default class HomeTranslations extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            paragraph: '',
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
        this.getHomeVideos();
    };
    getHomeVideos = async ()=> {
        this.setState({spinning: true});
        // const guideId = parseInt(this.props.match.params.id)
        if(!this._isMounted){
            let response = await ApiCall.get(Url.GET_HOME_VIDEO, await config())
            if(response.status=== 200){
                const translations = response.data.videos[0].translations
                this.setState({
                    languages: response.data.languages,
                    translations,
                    spinning: false
                });
            }
        }

    };
    componentWillUnmount() {
        this._isMounted = true
    }
    handleGuidesInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleChangeParagraph = (paragraph) => {
        this.setState({paragraph});
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
           if(e.target.value !== "Please Select Language"){
            this.setState({
                selectedLanguage: e.target.value
            })
        }else {
            this.setState({
                selectedLanguage: null
            })
        }

    };
    toggle = (item) => {
        this.setState({
            showModal: !this.state.showModal
        })
        if (item.id) {
            this.setState({
                selectedLanguage: item.language.id,
                modalMethod: 'update',
                translationId: item.id
            })
        }else {
            this.setState({
                title: '',
                paragraph: '',
                selectedLanguage: '',
                modalMethod: 'store'
            })
        }
    };

    deleteTranslation  =  (item) => {
        confirmAlert({
            title: 'Confirmation!',
            message: 'Are you sure you want to Delete This Translation?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.confirmDeleteTranslation(item)
                },
                {
                    label: "No",
                }
            ]
        })
    };
    confirmDeleteTranslation = async (id) => {
        let response = await ApiCall.post(`${Url.DELETE_TRANSLATION_VIDEO}/${id}`, {}, await config());
        if(response.status === 200){
            this.getHomeVideos();
            return  NotificationManager.success(
                "Translation deleted Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        }
    };

    onHomeVideoComplete = (item) => {
        if (Array.isArray(item.fileData) && item.fileData.length > 0) {
            if(item.fileData[0].status === "File failed to upload"){
                return NotificationManager.error(
                    `Translation Already Exist`,
                    "Error",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {

                setTimeout(() => {
                    this.getHomeVideos();
                    this.setState({
                        showModal: !this.state.showModal
                    })
                }, 1000)
                return NotificationManager.success(
                    item.fileData[0].status,
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            }
        }
    }
    render() {
        const data = this.getData()
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">

                        <div className="text-zero top-right-button-container">
                            <Link to='/app/video/upload'><Button size='lg' color={'secondary'}>Go Back</Button></Link>
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
                                  Home Video Translations | <Button size='xs' color='primary'
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
                                                return <span>{rowData.language.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="danger" size="xs" className="mb-2"
                                                            onClick={() => this.deleteTranslation(rowData.id)}
                                                    >
                                                        <IntlMessages id="delete"/>
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
                                    entityId={parseInt(this.props.match.params.id)}
                                    onHomeVideoComplete={this.onHomeVideoComplete}
                                    modalMethod={"store"}
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
