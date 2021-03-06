

import React, { Component, Fragment } from "react";
import { Row, Col, CardBody, CardTitle, Card, Button, } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import { config } from "../../../config/env";
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";
import { Table } from "rsuite";
import '../table.css';
import moment from "moment";
const { Column, HeaderCell, Cell, Pagination } = Table;
export default class AgeView extends Component {
    constructor() {
        super();
        this.state = {
            selectAll: false,
            adverts: [],
            checked: [],
            spinning: false,
            //Pagination
            displayLength: 10,
            page: 1
        };
    }


    componentDidMount() {
        this._isMounted = false
        this.getAllAdvert();
    };
    getAllAdvert = async () => {
        this.setState({ spinning: true });
        if (!this._isMounted) {
            let response = await ApiCall.get(Url.ALL_ADVERT, await config())
            console.log({ response })
            if (response.status === 200) {
                this.setState({ adverts: response.data.ads.reverse(), spinning: false });
            }
        }
    };
    componentWillUnmount() {
        this._isMounted = true
    }

    changeStatus = (item) => {
        confirmAlert({
            title: 'Confirmation!',
            message: 'Are you sure you want to Delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.confirmChangeStatus(item)
                },
                {
                    label: "No"
                }
            ]
        })
    };


    confirmChangeStatus = async (id) => {
        this.setState({ spinning: true });
        let response = await ApiCall.get(`${Url.DELETE_ADVERT}/${id}`, await config());
        if (response.status === 200) {
            this.setState({ spinning: false });
            await this.getAllAdvert();
            return NotificationManager.success(
                "Advert deleted Successfully",
                "Success",
                3000,
                null,
                null,
                'filled'
            );
        }

    };
    handleChangePage = (dataKey) => {
        // console.log(dataKey)
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
        const { displayLength, page } = this.state;
        return this.state.adverts.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };
    render() {
        const data = this.getData();
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">

                        <div className="text-zero top-right-button-container">
                            <Link to='/app/advert/create'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.create"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="view" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Col>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id={"Advertisements"} />
                                </CardTitle>
                                <Table autoHeight={true}
                                    data={data}
                                    bordered
                                    cellBordered
                                    virtualized={false}
                                    hover={true}
                                    loading={this.state.spinning}
                                >
                                    <Column width={50} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex + 1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*Organization*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Organization</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.organization_id.name} $</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*amount*/}
                                    <Column minWidth={200} flexGrow={1} align="center" style={{ display: 'none' }} >
                                        <HeaderCell>Amount</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.amount} $</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*start_time*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Start Time</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{moment(rowData.start_time).format('MMMM Do YYYY, h:mm')}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*end time*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>End Time</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{moment(rowData.end_time).format('MMMM Do YYYY, h:mm')}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*Laptop images*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Desktop Images</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.desktop_images}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*tablets images*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Tablet Images</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.tablets_images}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    {/*mobile images*/}
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Mobile Images</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowData.mobile_images}</span>
                                            }}
                                        </Cell>
                                    </Column>




                                    <Column minWidth={250} flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="secondary" size="xs" className="mb-2">
                                                        <Link to={`/app/advert/edit/${rowData._id}`} style={{ color: 'white' }}><IntlMessages id="edit" /></Link>
                                                    </Button>
                                                    {" "}{" "}
                                                    <Button color="danger" size="xs" className="mb-2" onClick={() => this.changeStatus(rowData._id)}>
                                                        <IntlMessages id="delete" />
                                                    </Button>
                                                    {" "}{" "}
                                                    {/*<Button color="info" size="xs" className="mb-2">*/}
                                                    {/*    <Link to={`/app/ageName/translations/${rowData.id}`} style={{color: 'white'}}>Translation</Link>*/}
                                                    {/*</Button>*/}
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                </Table>
                                <Pagination
                                    lengthMenu={[
                                        {
                                            value: 10,
                                            label: 10
                                        },
                                        {
                                            value: 20,
                                            label: 20
                                        }
                                    ]}
                                    activePage={this.state.page}
                                    displayLength={this.state.displayLength}
                                    total={this.state.adverts.length}
                                    onChangePage={this.handleChangePage}
                                    onChangeLength={this.handleChangeLength}
                                />
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Fragment>
        )
    }
}
