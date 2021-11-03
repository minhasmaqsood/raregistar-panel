import React, { Component, Fragment } from "react";
import { Row, Col, CardBody, CardTitle, Card, Button, } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import { config, multipartConfig } from "../../../config/env";
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";
import { Table } from "rsuite";
import moment from 'moment'
import '../table.css';
const { Column, HeaderCell, Cell, Pagination } = Table;
export default class AgeView extends Component {
    constructor() {
        super();
        this.state = {
            selectAll: false,
            competitions: [],
            checked: [],
            spinning: false,
            //Pagination
            displayLength: 10,
            page: 1
        };
    }


    componentDidMount() {
        this._isMounted = false
        this.getAllCompetition();
    };
    getAllCompetition = async () => {
        this.setState({ spinning: true });
        if (!this._isMounted) {
            let response = await ApiCall.get(Url.ALL_COMPETITION, await multipartConfig())
            console.log(response, 'competitions')
            if (response.status === 200) {
                this.setState({ competitions: response.data.competitions.reverse(), spinning: false });
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
        let response = await ApiCall.get(`${Url.DELETE_COMPETITION}/${id}`, await config());
        if (response.status === 200) {
            this.setState({ spinning: false });
            this.getAllCompetition();
            return NotificationManager.success(
                "competition deleted Successfully",
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
        return this.state.competitions.filter((v, i) => {
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
                            <Link to='/app/competition/create'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.create"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="Competition view" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Col>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>
                                    Competitions
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
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Quiz</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                return <span>{rowData.quiz.name}</span>
                                            }}
                                        </Cell>
                                    </Column>

                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>organization1</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                // console.log(rowData.organization1_id.name,'Name')
                                                return <span>{rowData.organization1_id === null || undefined ? 'no' : rowData.organization1_id.name}</span>
                                            }}
                                        </Cell>
                                    </Column><Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>organization2</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                return <span>{rowData.organization2_id === null || undefined ? 'no' : rowData.organization2_id.name}</span>
                                            }}
                                        </Cell>
                                    </Column><Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Date</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                return <span>{moment(rowData.held_at).format('MMMM Do YYYY, h:mm')}</span>
                                            }}
                                        </Cell>
                                    </Column><Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Picture</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                return <span>{rowData.image}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={250} flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData) => {
                                                return <div>
                                                    <Button color="secondary" size="xs" className="mb-2">
                                                        <Link to={`/app/competition/edit/${rowData._id}`} style={{ color: 'white' }}><IntlMessages id="edit" /></Link>
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
                                    total={this.state.competitions.length}
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
