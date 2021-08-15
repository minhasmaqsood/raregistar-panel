import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import {NotificationManager} from "../../../components/common/react-notifications";
import {config} from "../../../config/env";
import {Table} from "rsuite";
import '../table.css';
const { Column, HeaderCell, Cell } = Table;
// import {Link} from "react-router-dom";
const initialState = {
    selectedCountry: '',
    code: '',
    countries: [],
    loading: false,
    spinning: false,

}

export default class UpdateCountryCodes extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    componentDidMount() {
        this._isMounted = false;
        this.getAllCountries();
    }

    componentWillUnmount() {
        this._isMounted = true
    }

    updateCode = async (e) => {
        e.preventDefault();
        const {
            selectedCountry,
            code,
        } = this.state;
        let validation = this.handleValidations();
        if (validation.status) {
            this.setState({loading: true})
            const data = {
                id: selectedCountry,
                code: code,
            }
            let response = await ApiCall.post(Url.UPDATE_COUNTRY_CODE, data, await config())
            if (response.status === 200) {
                this.setState({
                    loading: false
                });
                this.getAllCountries();
                return NotificationManager.success(
                    "Code Updated Successfully",
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
    };
    handleValidations = () => {
        const {
            selectedCountry,
            code,
        } = this.state;
        let selectedCountryValidation = {
            message: 'Please Select Country',
            status: false,
        };
        let codeValidation = {
            message: 'Please Provide Code',
            status: false,
        };
        let passed = {
            status: true
        };
        return selectedCountry !== "" ?
            code === "" ? codeValidation :
                        passed
            : selectedCountryValidation

    };

    getAllCountries = async () => {
        if (!this._isMounted) {
            this.setState({
                spinning: true
            })
            let response = await ApiCall.get(Url.ALL_COUNTRIES, await config())
            if (response.status === 200) {
                this.setState({
                    countries: response.data.countries,
                    spinning: false
                });
            }
        }

    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSelectCategoryChange = (e) => {
        if (e.target.value !== 'null') {
            this.setState({selectedCountry: e.target.value,
                code: this.state.countries.find(item => item.id == e.target.value).code
            })
        } else {
            this.setState({selectedCountry: '', code: ""})
        }
    };

    render() {
        const {
            selectedCountry,
            code,
            countries,
            spinning

    } = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="update" match={this.props.match}/>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>
                {spinning? <div className="loading"/> :
                    <>
                <Row>

                    <Col xxs="10">
                        <div className='col-sm-12 col-lg-12 col-xs-12 '>

                            <Card>
                                <div className="position-absolute card-top-buttons">
                                </div>
                                <CardBody>
                                    <CardTitle>
                                       Update Country Code
                                    </CardTitle>
                                    <Form className="dashboard-quick-post" onSubmit={this.updateCode}>
                                        <FormGroup row>
                                            <Label sm="3">
                                               Select Country
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={selectedCountry}
                                                    onChange={this.handleSelectCategoryChange}
                                                >
                                                    <option value='null'>Select an option..</option>
                                                    {countries.map(item => {
                                                        return (
                                                            <option value={item.id} key={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </Colxx>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label sm="3">
                                                Code
                                            </Label>
                                            <Colxx sm="9">
                                                <Input type="text" value={code}
                                                       disabled={selectedCountry === "" && code === ""}
                                                       onChange={this.handleInputChange}
                                                       name="code" placeholder={'Code *'} required/>
                                            </Colxx>
                                        </FormGroup>
                                            <Button
                                            className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                                            color="primary" disabled={this.state.loading ||(selectedCountry === "" && code === "")}>
                                            <span className="spinner d-inline-block">
                                            <span className="bounce1"/>
                                            <span className="bounce2"/>
                                            <span className="bounce3"/>
                                            </span>
                                            <span className="label">Update</span>
                                            </Button>





                                    </Form>
                                </CardBody>
                            </Card>
                            <Card className="h-100 mt-5">
                                <CardBody>
                                    <CardTitle>
                                       Countries
                                    </CardTitle>
                                    <Table
                                        // autoHeight={true}
                                           data={this.state.countries}
                                           bordered
                                           height={500}
                                           cellBordered
                                           virtualized={true}
                                           hover={true}
                                           loading={this.state.spinning}
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
                                            <HeaderCell>Name</HeaderCell>
                                            <Cell>
                                                {(rowData, rowIndex) => {
                                                    return <span>{rowData.name}</span>
                                                }}
                                            </Cell>
                                        </Column>
                                        <Column minWidth={200}  flexGrow={1} align="center">
                                            <HeaderCell>Code</HeaderCell>
                                            <Cell>
                                                {(rowData, rowIndex) => {
                                                    return <span>{rowData.code === ""? "-": rowData.code }</span>
                                                }}
                                            </Cell>
                                        </Column>
                                    </Table>
                                    {/*<Pagination*/}
                                    {/*    lengthMenu={[*/}
                                    {/*        {*/}
                                    {/*            value: 10,*/}
                                    {/*            label: 10*/}
                                    {/*        },*/}
                                    {/*        {*/}
                                    {/*            value: 20,*/}
                                    {/*            label: 20*/}
                                    {/*        }*/}
                                    {/*    ]}*/}
                                    {/*    activePage={this.state.page}*/}
                                    {/*    displayLength={this.state.displayLength}*/}
                                    {/*    total={this.state.countries.length}*/}
                                    {/*    onChangePage={this.handleChangePage}*/}
                                    {/*    onChangeLength={this.handleChangeLength}*/}
                                    {/*/>*/}
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                </Row>
                    </>}
            </Fragment>
        )
    }
}
