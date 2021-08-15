import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from "../../../config/network";
import Url from "../../../config/api";
import {config, multipartConfig} from "../../../config/env";
import {NotificationManager} from "../../../components/common/react-notifications";
import {Link} from "react-router-dom";
import DropzoneExample from "../../../containers/forms/DropzoneExample";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const initialState = {
    user1_id : '',
    user2_id : '',
    organization1_id:'',
    organization2_id:'',
    organizationSelected1: '',
    userSelected2 : '',
    organizationSelected2: '',
    image:'',
    startDate:'',
    users:[],
    organizations:[],
    id: null,
    loading: false,
    spinning: false,

}
export default class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    getAllUsers = async ()=> {
        this.setState({spinning: true});
        if(!this._isMounted){
            let response = await ApiCall.get(Url.ALL_USER, await config())
            console.log(response,'users')
            if(response.status=== 200){
                this.setState({users: response.data.users.reverse(), spinning: false});
            }
        }
    };
    getAllOrganization = async ()=> {
        this.setState({spinning: true});
        if(!this._isMounted){
            let response = await ApiCall.get(Url.ALL_ORGANIZATION, await config())
            console.log(response)
            if(response.status=== 200){
                this.setState({organizations: response.data.organizations.reverse(), spinning: false});
            }
        }
    };
    componentDidMount() {
        this._isMounted = false
        this.getSingleCompetition();
        this.getAllUsers();
        this.getAllOrganization();
    }
    componentWillUnmount() {
        this._isMounted = true
    }
    getSingleCompetition = async () => {
        this.setState({spinning: true});
        let response = await ApiCall.get(`${Url.SINGLE_COMPETITION}/${this.props.match.params.slug}`, await multipartConfig());
        console.log(response,'single competition')
        if (response.status === 200) {
            if(!this._isMounted){
                this.setState({
                    user1_id: response.data.competition.user1_id._id,
                    user2_id: response.data.competition.user2_id._id,
                    organization1_id: response.data.competition.organization1_id._id,
                    organization2_id: response.data.competition.organization2_id._id,
                    image: response.data.competition.image,
                    startDate: moment(response.data.competition.held_at),
                    id: response.data.competition._id,
                    spinning: false
                });
            }

        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleValidation = () => {
        const {user1_id,user2_id,startDate,organization1_id,organization2_id,image} = this.state;
        let organizationSelected1Validation = {
            message: '"Please select organization 1 ",',
            status: false
        };
        let organizationSelected2Validation = {
            message: '"Please select organization 2",',
            status: false
        };
        let user1SelectedValidation = {
            message: '"Please select user 1",',
            status: false
        }; let user2SelectedValidation = {
            message: '"Please select user 2",',
            status: false
        };
        let ImageValidation = {
            message: 'Image is required',
            status: false
        }; let DateValidation = {
            message: 'Date is required',
            status: false
        };
        let passed = {
            status: true
        };
        return user1_id !== ''?
            image === ''? ImageValidation :
                user2_id === '' ? user2SelectedValidation :
                    organization1_id === '' ? organizationSelected1Validation :
                        organization2_id === '' ? organizationSelected2Validation :
                            startDate === '' ? DateValidation :
                                passed : user1SelectedValidation
    }

    updateCompetition = async (e) => {
        e.preventDefault();
        const {image,startDate,user1_id,user2_id,organization1_id,organization2_id,id} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            let data = new FormData()
            data.append('user1_id',user1_id)
            data.append('organization1_id',organization1_id)
            data.append('user2_id',user2_id)
            data.append('organization2_id',organization2_id)
            data.append('image',image)
            data.append('date',startDate)
            data.append('competition_id',id)

            this.setState({loading: true});
            let response = await ApiCall.post(Url.UPDATE_COMPETITION,
                data, await multipartConfig());

            if (response.status === 200) {
                this.setState(initialState);
                this.props.history.push('/app/competition/view')
                return NotificationManager.success(
                    "Competition Updated Successfully",
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {
                this.setState({loading: false});
            }
        }

    };
    handleUserSelect1TypeChange = (e) => {
        if (e.target.value !== 'null') {
            this.setState({user1_id: e.target.value})
        } else {
            this.setState({user1_id: ''})
        }
    };
    handleUserSelect2TypeChange = (e) => {

        if (e.target.value !== 'null') {

            this.setState({user2_id: e.target.value})
        } else {
            this.setState({user2_id: ''})
        }
    };
    handleOrganizationSelect1TypeChange = (e) => {
        if (e.target.value !== 'null') {
            this.setState({organization1_id: e.target.value})
        } else {
            this.setState({organization1_id: ''})
        }
    };
    handleOrganizationSelect2TypeChange = (e) => {

        if (e.target.value !== 'null') {
            this.setState({organization2_id: e.target.value})
        } else {
            this.setState({organization2_id: ''})
        }
    };

    onFileRemove = (item)=>{
        if(item){
            this.setState({
                image: '',
            })
        }
    };
    onImageChange = (file) => {
        this.setState({
            image: file
        })
    };
    handleChangeDate = date => {
        this.setState({
            startDate: date
        });
    }
    render() {
        const  { user1_id,
            users,
            organizations,
            user2_id ,
            startDate,
            organization1_id,
            spinning,
            image,
            organization2_id} = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/competition/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="category.edit" match={this.props.match}/>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>
                <Row>
                    <Col xxs="10">
                        <div className='col-sm-12 col-lg-10 col-xs-12 '>
                        {spinning ? <div className="loading"/> :
                            <Card>
                                <div className="position-absolute card-top-buttons">
                                </div>
                                <CardBody>
                                    <CardTitle>
                                        <IntlMessages id="category.update"/>
                                    </CardTitle>
                                    <Form className="dashboard-quick-post" onSubmit={this.updateCompetition}>
                                        <FormGroup row>
                                            <Label sm="3">
                                                Select user 1
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={user1_id}
                                                    onChange={this.handleUserSelect1TypeChange}
                                                >
                                                    {/*<option value='null'>Select an option..</option>*/}
                                                    {
                                                        users.map((item)=>{
                                                            return(
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            )
                                                        })
                                                    }

                                                </select>
                                            </Colxx>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm="3">
                                                Select user 2
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={user2_id}
                                                    onChange={this.handleUserSelect2TypeChange}
                                                >
                                                    {/*<option value='null'>Select an option..</option>*/}
                                                    {
                                                        users.map((item)=>{
                                                            return(
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </Colxx>
                                        </FormGroup>


                                        <FormGroup row>
                                            <Label sm="3">
                                                Select Organization 1
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={organization1_id}
                                                    onChange={this.handleOrganizationSelect1TypeChange}
                                                >
                                                    {/*<option value='null'>Select an option..</option>*/}

                                                    {
                                                        organizations.map((item)=>{
                                                            return(
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </Colxx>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm="3">
                                                Select Organization 2
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={organization2_id}
                                                    onChange={this.handleOrganizationSelect2TypeChange}
                                                >
                                                    {/*<option value='null'>Select an option..</option>*/}

                                                    {
                                                        organizations.map((item,index)=>{
                                                            return(
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </Colxx>
                                        </FormGroup>
                                        {image &&
                                        <FormGroup row>
                                            <Label sm="3">
                                                {/*<IntlMessages id="categories-type"/>*/}
                                                Picture
                                            </Label>
                                            <Colxx sm="9">
                                                <DropzoneExample
                                                    fileTypes={'image/*'}
                                                    removeFile={this.onFileRemove}
                                                    onChange={this.onImageChange}
                                                    url={image}
                                                />
                                            </Colxx>
                                        </FormGroup> }
                                        <FormGroup row>
                                            <Label sm="3">
                                                {/*<IntlMessages id="categories-type"/>*/}
                                                Date
                                            </Label>
                                            <Colxx sm="9">
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={this.handleChangeDate}
                                                    placeholderText={'Pick a date'}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    dateFormat="LLL"
                                                    timeCaption="Time"
                                                />
                                            </Colxx>
                                        </FormGroup>
                                        <Button
                                            className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                                            color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block"><span className="bounce1"/><span className="bounce2"/><span className="bounce3"/></span>
                                            {/*<span className="label"><IntlMessages id="category.update"/></span>*/}
                                            <span className="label">Update Competition</span>
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        }
                        </div>
                    </Col>

                </Row>
            </Fragment>
        )
    }
}
