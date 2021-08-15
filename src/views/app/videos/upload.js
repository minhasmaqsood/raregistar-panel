import React, {Fragment, useEffect, useState} from "react";
import {Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane,} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import VideoUploader from "../../../components/VideoUploader";
// import ReactPlayer from 'react-player'
import classnames from 'classnames';
import Url from '../../../config/api'
import ApiCall from "../../../config/network";
import {
    // base,
    config} from "../../../config/env";
import Spinner from "reactstrap/es/Spinner";
import Button from "reactstrap/es/Button";
import {NotificationManager} from "../../../components/common/react-notifications";
// import ReactPlayer from 'react-player'
import IntlMessages from "../../../helpers/IntlMessages";
import {Table} from "rsuite";
import '../table.css';
import VideoTranslationsModal from "./HomeVideoTranslationModal";
import {Link} from "react-router-dom";

const { Column, HeaderCell, Cell,
    // Pagination
} = Table;

const Videos = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [homeLoading, setHomeLoading] = useState(true);
    const [homeDeleting, setHomeDeleting] = useState(false);
    const [courseDeleting, setCourseDeleting] = useState(false);
    const [homeVideos, setHomeVideos] = useState([]);
    const [courseLoading, setCourseLoading] = useState(true);
    const [courseVideos, setCourseVideos] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({selectedLanguage: ""});
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    useEffect(() => {
        getHomeVideo();
        getCourseVideos();
        getLanguages();
    }, [])

    const getLanguages = async () => {
        let response = await ApiCall.get(Url.GET_ALL_LANGUAGES, await config());
        if (response.status === 200) {
            setLanguages(response.data.languages)
        }
    };

    const getHomeVideo = async () => {
        setHomeLoading(true);
        let response = await ApiCall.get(Url.GET_HOME_VIDEO, await config());

        if (response.status === 200) {
            setHomeLoading(false);
            // return console.log(response.data.videos)
            setHomeVideos(response.data.videos)
        } else {
            setHomeLoading(false);
        }
    };

    const getCourseVideos = async () => {
        setCourseLoading(true);
        let response = await ApiCall.get(Url.GET_COURSE_VIDEOS, await config());
        if (response.status === 200) {
            setCourseLoading(false);
            setCourseVideos(response.data.videos)
        } else {
            setCourseLoading(false);
        }
    };

    const onHomeVideoComplete = (item) => {
        if (Array.isArray(item.fileData) && item.fileData.length > 0) {
            if(item.fileData[0].status === "File failed to upload"){
                return NotificationManager.error(
                    item.fileData[0].status,
                    "Error",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {
                setTimeout(() => {
                    getHomeVideo();
                }, 1000)
            }
        }
    };

    const onCourseVideosComplete = (item) => {
        if (Array.isArray(item.fileData) && item.fileData.length > 0) {
            if(item.fileData[0].status === "File failed to upload"){
                return NotificationManager.error(
                    item.fileData[0].status,
                    "Error",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {
                setTimeout(() => {
                    getCourseVideos();
                }, 1000)
            }
        }
    };

    const deleteHomeVideo = async (id) => {
        setHomeDeleting(true);
        let response = await ApiCall.post(`${Url.DELETE_HOME_VIDEO}/${id}`, {}, await config());
        if(response.status === 200){
            setHomeDeleting(false);
            getHomeVideo();
            return  NotificationManager.success(
                "Video Deleted Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        } else {
            setHomeDeleting(false);
        }
    };
    const getHomeData =() => {
        const  displayLength = 10;
        const  page = 1;
        return homeVideos.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };
    const homeData = getHomeData();

  const getData =() => {
      const  displayLength = 10;
      const  page = 1;
        return courseVideos.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };
    const data = getData();

   const deleteCourseVideo = async (id) => {
       setCourseDeleting(true)
        let response = await ApiCall.post(`${Url.DELETE_HOME_VIDEO}/${id}`, {}, await config());
        if(response.status === 200){
            setCourseDeleting(false);
            getCourseVideos();
            return  NotificationManager.success(
                "Video Deleted Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        }else {
            setCourseDeleting(false);
        }
    }

    const toggleModal = () => {
       setModal(!modal)
    };

  const  handleSelectLanguage = (e) => {
        setState({
            ...state,
            selectedLanguage: e.target.value
        })
    };


    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.create" match={props.match}/>
                    <Separator className="mb-5"/>
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
                                    Upload Videos
                                </CardTitle>
                                <div className='control-pane'>
                                    <div className='control-section row uploadpreview'>
                                        <div className='col-lg-8'>
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: activeTab === '1'})}
                                                        onClick={() => {
                                                            toggle('1');
                                                        }}
                                                    >
                                                        Home Video
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({active: activeTab === '2'})}
                                                        onClick={() => {
                                                            toggle('2');
                                                        }}
                                                    >
                                                        Course Videos
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId="1">
                                                    <div className='upload_wrapper mt-5'>
                                                        {homeLoading ?
                                                            <div className="d-flex flex-row mb-3 pb-3 border-bottom"
                                                                 style={{justifyContent: 'center', padding: '50px'}}>
                                                                <h3 className="text-center mt-3 mb-3">
                                                                    <Spinner/>
                                                                    <br/>
                                                                    Loading
                                                                </h3>
                                                            </div> :
                                                                    <>
                                                                        <div className="lead mb-2">
                                                                            Please Upload Home Videos {" "}
                                                                        </div>
                                                                        <hr/>
                                                                        {" "} <span className="text-muted mt-2 mb-2">Maximum File Size 200MB</span>
                                                                        <hr/>
                                                                        <VideoUploader
                                                                            uploadUrl={Url.UPLOAD_HOME_VIDEO}
                                                                            isMulti={false}
                                                                            chunkSize={200000000}
                                                                            onUploadComplete={onHomeVideoComplete}
                                                                        />
                                                                    </>

                                                                }

                                                    </div>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    {courseLoading ?
                                                        <div className="d-flex flex-row mb-3 pb-3 border-bottom"
                                                             style={{justifyContent: 'center', padding: '50px'}}>
                                                            <h3 className="text-center mt-3 mb-3">
                                                                <Spinner/>
                                                                <br/>
                                                                Loading
                                                            </h3>
                                                        </div> :
                                                    <div className='upload_wrapper mt-5'>
                                                        <div className="lead">
                                                            Please Upload Course Videos
                                                        </div>
                                                        <hr/>
                                                        {" "} <span className="text-muted mt-2 mb-2">Maximum File Size 200MB</span>
                                                        <hr/>
                                                        <VideoUploader
                                                            uploadUrl={Url.UPLOAD_COURSE_VIDEO}
                                                            isMulti={false}
                                                            chunkSize={200000000}
                                                            onUploadComplete={onCourseVideosComplete}
                                                        />

                                                    </div> }


                                                </TabPane>
                                            </TabContent>

                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        {activeTab === '1' &&
                        <Card className="h-100 mt-5">
                            <CardBody>
                                <CardTitle>
                                    Home Videos
                                </CardTitle>
                                <Table autoHeight={true}
                                       data={homeData}
                                       bordered
                                       cellBordered
                                       virtualized={false}
                                       hover={true}
                                       loading={homeLoading}
                                >
                                    <Column width={60} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex +1}</span>
                                            }}
                                        </Cell>
                                    </Column>

                                    <Column width={200}  flexGrow={1} align="center">
                                        <HeaderCell>Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.link.split('storage/upload/')[1]}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="danger" size="xs" className="mb-2" onClick={()=> deleteHomeVideo(rowData.id)}>
                                                        <IntlMessages id="delete" />
                                                    </Button>
                                                    {" "}{" "}{" "}{" "}
                                                    <Button color="info" size="xs" className="mb-2">
                                                        <Link to={`/app/video/translations/home/${rowData.id}`} style={{color: 'white'}}>Translation</Link>
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </Table>
                            </CardBody>
                        </Card>}
                        {activeTab === '2' &&
                        <Card className="h-100 mt-5">
                            <CardBody>
                                <CardTitle>
                                    Course Videos
                                </CardTitle>
                                <Table autoHeight={true}
                                       data={data}
                                       bordered
                                       cellBordered
                                       virtualized={false}
                                       hover={true}
                                       loading={courseLoading}
                                >
                                    <Column width={60} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex +1}</span>
                                            }}
                                        </Cell>
                                    </Column>

                                    <Column width={200}  flexGrow={1} align="center">
                                        <HeaderCell>Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.link.split('storage/upload/')[1]}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="danger" size="xs" className="mb-2" onClick={()=> deleteCourseVideo(rowData.id)}>
                                                        <IntlMessages id="delete" />
                                                    </Button>
                                                    {" "}{" "}{" "}{" "}
                                                    <Button color="info" size="xs" className="mb-2">
                                                        <Link to={`/app/video/translations/course/${rowData.id}`} style={{color: 'white'}}>Translation</Link>
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </Table>
                            </CardBody>
                        </Card>}
                        {modal &&
                        <VideoTranslationsModal
                        languages={languages}
                        handleSelectLanguage={handleSelectLanguage}
                        selectedLanguage={state.selectedLanguage}
                        storeTranslation={() => console.log("Hi")}
                        loadingApi={false}
                        toggle={toggleModal}
                        showModal={modal}
                        />
                        }
                    </div>
                </Col>

            </Row>
        </Fragment>
    )
};

export default Videos
