import React, { Component, Fragment } from "react";
import {
    Row,
    Col,
    CardBody,
    CardTitle,
    Card,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    // Label,
    FormGroup
} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import {config} from "../../../config/env";
// import { confirmAlert } from 'react-confirm-alert';
// import {Link} from "react-router-dom";
import {Table} from "rsuite";
import '../table.css';
import ReactTable from "../../../components/table";
const { Column, HeaderCell, Cell, Pagination } = Table;
export default class VIPRegistrations extends Component {
    constructor() {
        super();
        this.state = {
            selectAll: false,
            vipRegistrations: [],
            allVipRegistrations: [],
            waitingRegistrations: [],
            allWaitingRegistrations: [],
            registeredRegistrations: [],
            allRegisteredRegistrations: [],
            checked: [],
            spinning: false,
            selectedUser: '',
            userId: null,
            selectedStatus: '',
            changingStatus: false,
            showStatusModal: false,
            //Pagination
            displayLength: 10,
            page: 1,
            displayWaitingLength: 10,
            waitingPage: 1,
            displayRegisteredLength: 10,
            registeredPage: 1,
        };
    }


    componentDidMount() {
        this._isMounted = false
        this.getAllRegistrations();
    };
    getAllRegistrations = async ()=> {
        this.setState({spinning: true});
        if(!this._isMounted){
            let response = await ApiCall.get(Url.VIP_REGISTRATIONS, await config())
            if(response.status=== 200){
                // console.log(response)
                let vipRegistrations = response.data.vipRegistrations.filter(item => item.user.status === 'vip').reverse();
                let waitingRegistrations = response.data.vipRegistrations.filter(item => item.user.status === 'waiting').reverse();
                let registeredRegistrations = response.data.vipRegistrations.filter(item => item.user.status === 'registered').reverse();
                this.setState({
                    vipRegistrations,
                    waitingRegistrations,
                    registeredRegistrations,
                    allVipRegistrations: JSON.parse(JSON.stringify(vipRegistrations)),
                    allWaitingRegistrations: JSON.parse(JSON.stringify(waitingRegistrations)),
                allRegisteredRegistrations: JSON.parse(JSON.stringify(registeredRegistrations)),
                    spinning: false
                });
            }
        }

    };
    componentWillUnmount() {
        this._isMounted = true
    }


    handleChangePage=(dataKey)=> {
        // console.log(dataKey)
        this.setState({
            page: dataKey
        });
    };
    handleChangeWaitingPage=(dataKey)=> {
        // console.log(dataKey)
        this.setState({
            waitingPage: dataKey
        });
    };

    handleChangeRegisteredPage=(dataKey)=> {
        // console.log(dataKey)
        this.setState({
            registeredPage: dataKey
        });
    };
    handleChangeLength=(dataKey)=> {
        this.setState({
            page: 1,
            displayLength: dataKey
        });
    };
    handleChangeWaitingLength=(dataKey)=> {
        this.setState({
            waitingPage: 1,
            displayWaitingLength: dataKey
        });
    };
    handleChangeRegisteredLength=(dataKey)=> {
        this.setState({
            registeredPage: 1,
            displayRegisteredLength: dataKey
        });
    };

    getWaitingData =() => {
        const { displayWaitingLength, waitingPage } = this.state;
        return this.state.allWaitingRegistrations.filter((v, i) => {
            const start = displayWaitingLength * (waitingPage - 1);
            const end = start + displayWaitingLength;
            return i >= start && i < end;
        });
    };

    getRegisteredData =() => {
        const { displayRegisteredLength, registeredPage } = this.state;
        return this.state.allRegisteredRegistrations.filter((v, i) => {
            const start = displayRegisteredLength * (registeredPage - 1);
            const end = start + displayRegisteredLength;
            return i >= start && i < end;
        });
    };

    getData =() => {
        const { displayLength, page } = this.state;
        return this.state.allVipRegistrations.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };

    handleVipFilterChange = (e) => {
        this.setState({page: 1})
        const data = this.state.vipRegistrations.filter((v, i) => {
            const start = 1000 * (1 - 1);
            const end = start + 1000;
            return i >= start && i < end;
        })
        const filteredData = data.filter(item => {
            const query = e.target.value.toLowerCase();
            return (
                item.user.name.toLowerCase().indexOf(query) >= 0 ||
                item.user.email.toLowerCase().indexOf(query) >= 0
            )
        });
        this.setState({
            allVipRegistrations: filteredData
        })
        if(e.target.value=== ''){
            this.setState({
                allVipRegistrations: this.state.vipRegistrations
            })
        }
    };

    handleWaitingFilterChange = (e) => {
        this.setState({page: 1})
        const data = this.state.waitingRegistrations.filter((v, i) => {
            const start = 1000 * (1 - 1);
            const end = start + 1000;
            return i >= start && i < end;
        })
        const filteredData = data.filter(item => {
            const query = e.target.value.toLowerCase();
            return (
                item.user.name.toLowerCase().indexOf(query) >= 0 ||
                item.user.email.toLowerCase().indexOf(query) >= 0
            )
        });
        this.setState({
            allWaitingRegistrations: filteredData
        })
        if(e.target.value=== ''){
            this.setState({
                allWaitingRegistrations: this.state.waitingRegistrations
            })
        }
    };

    handleRegisteredFilterChange = (e) => {
        this.setState({page: 1})
        const data = this.state.registeredRegistrations.filter((v, i) => {
            const start = 1000 * (1 - 1);
            const end = start + 1000;
            return i >= start && i < end;
        })
        const filteredData = data.filter(item => {
            const query = e.target.value.toLowerCase();
            return (
                item.user.name.toLowerCase().indexOf(query) >= 0 ||
                item.user.email.toLowerCase().indexOf(query) >= 0
            )
        });
        this.setState({
            allRegisteredRegistrations: filteredData
        })
        if(e.target.value=== ''){
            this.setState({
                allRegisteredRegistrations: this.state.registeredRegistrations
            })
        }
    };

    toggle = (item) => {
        this.setState({
            showStatusModal: !this.state.showStatusModal
        })
        if(item.user){
            this.setState({
                selectedUser: item.user,
                userId: item.id,
                selectedStatus: item.user.status === 'waiting'? 'vip' : item.user.status === 'vip'?  'registered' : 'vip'
            })
        }
    };

    handleSelectTypeChange = (e) => {
            this.setState({selectedStatus: e.target.value})
    };

    changeStatus =async () => {
        this.setState({changingStatus: true})
        let response = await ApiCall.post(Url.VIP_REGISTRATIONS_UPDATE,{
            id: this.state.userId,
            status: this.state.selectedStatus
        } ,await config());
        if(response.status === 200){
            // console.log(response)
            this.getAllRegistrations()
            this.setState({
                changingStatus: false,
                showStatusModal: false
            })
            return  NotificationManager.success(
                "Status Changed Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        }else {
            this.setState({
                changingStatus: false,
            })
        }
    }

    render() {
        const data = this.getData();
        const waitingData = this.getWaitingData();
        const registeredData = this.getRegisteredData();
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="view" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Col>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id={"vipRegistration"} />
                                </CardTitle>
                                <ReactTable
                                    data={data}
                                    loading={this.state.spinning}
                                    activePage={this.state.page}
                                    displayLength={this.state.displayLength}
                                    total={this.state.allVipRegistrations.length}
                                    onChangePage={this.handleChangePage}
                                    onChangeLength={this.handleChangeLength}
                                    handleFilterChange={this.handleVipFilterChange}
                                >
                                    <Column width={50} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex +1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell> DataTrades Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.email}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.country.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.firstName} ${rowData.ironFxDetail.lastName}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.email}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.country}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Status</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.status}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Account No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.vantageFXAccountNumber}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={100}  flexGrow={1} align="center">
                                        <HeaderCell>Created At</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.createdAt}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="info" size="xs" className="mb-2" onClick={()=> this.toggle(rowData)}>
                                                        Change Status
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </ReactTable>
                                <CardTitle>
                                    <IntlMessages id={"waitingRegistration"} />
                                </CardTitle>
                                <ReactTable
                                    data={waitingData}
                                    loading={this.state.spinning}
                                    activePage={this.state.waitingPage}
                                    displayLength={this.state.displayWaitingLength}
                                    total={this.state.allWaitingRegistrations.length}
                                    onChangePage={this.handleChangeWaitingPage}
                                    onChangeLength={this.handleChangeWaitingLength}
                                    handleFilterChange={this.handleWaitingFilterChange}
                                >
                                    <Column width={50} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex +1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell> DataTrades Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.email}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.country.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.firstName} ${rowData.ironFxDetail.lastName}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.email}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.country}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Status</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.status}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Account No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.vantageFXAccountNumber}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={100}  flexGrow={1} align="center">
                                        <HeaderCell>Created At</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.createdAt}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="info" size="xs" className="mb-2" onClick={()=> this.toggle(rowData)}>
                                                        Change Status
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </ReactTable>
                                <CardTitle>
                                    {/*<IntlMessages id={"waitingRegistration"} />*/}
                                    Registered Users
                                </CardTitle>
                                <ReactTable
                                    data={registeredData}
                                    loading={this.state.spinning}
                                    activePage={this.state.registeredPage}
                                    displayLength={this.state.displayRegisteredLength}
                                    total={this.state.allRegisteredRegistrations.length}
                                    onChangePage={this.handleChangeRegisteredPage}
                                    onChangeLength={this.handleChangeRegisteredLength}
                                    handleFilterChange={this.handleRegisteredFilterChange}
                                >
                                    <Column width={50} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex +1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell> DataTrades Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.email}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>DataTrades Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.country.name}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.firstName} ${rowData.ironFxDetail.lastName}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Email</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.email}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Iron FX Country</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.ironFxDetail? `${rowData.ironFxDetail.country}` : "-"}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Status</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.user.status}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={80}  flexGrow={1} align="center">
                                        <HeaderCell>Account No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.vantageFXAccountNumber}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={100}  flexGrow={1} align="center">
                                        <HeaderCell>Created At</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.createdAt}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={150}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="info" size="xs" className="mb-2" onClick={()=> this.toggle(rowData)}>
                                                        Change Status
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </ReactTable>

                                {this.state.selectedUser !== "" &&
                                <Modal isOpen={this.state.showStatusModal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>
                                        Change Status
                                        {/*<IntlMessages id="event.divisions-add-members" />*/}
                                    </ModalHeader>
                                    <ModalBody>
                                        <FormGroup row>
                                            <Colxx sm="12">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={this.state.selectedStatus}
                                                    onChange={this.handleSelectTypeChange}
                                                >
                                                    {/*<option value='waiting'>Waiting</option>*/}
                                                    <option value='vip'>Accept</option>
                                                    <option value='registered'>Deny</option>

                                                </select>
                                            </Colxx>
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.toggle}>
                                            Close
                                        </Button>
                                        <Button disabled={this.state.changingStatus}
                                                className={`float-right btn-shadow btn-multiple-state ${this.state.changingStatus ? "show-spinner" : ""}`}
                                                onClick={this.changeStatus}
                                                color="primary"
                                        >
                                        <span className="spinner d-inline-block">
                                            <span className="bounce1" />
                                            <span className="bounce2" />
                                            <span className="bounce3" />
                                        </span><span className="label">
                                                Change Status</span>
                                        </Button>
                                    </ModalFooter>
                                </Modal>}

                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Fragment>
        )
    }
}
