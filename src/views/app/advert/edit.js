import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from "../../../config/network";
import Url from "../../../config/api";
import {base, config} from "../../../config/env";
import {NotificationManager} from "../../../components/common/react-notifications";
import {Link} from "react-router-dom";
import DropzoneExample from "../../../containers/forms/DropzoneExample";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
    organization_id: '',
    start_time:'',
    end_time:'',
    amount:'',
    organizations:[],
    desktop_images:'',
    tablets_images:'',
    mobile_images:'',
    _id: null,
    loading: false,
    spinning: false,

}
export default class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    componentDidMount() {
        this._isMounted = false
        this.getSingleAdvertData();
        this.getAllOrganization();
    }
    componentWillUnmount() {
        this._isMounted = true
    }
    getSingleAdvertData = async () => {
        this.setState({spinning: true});
        let response = await ApiCall.get(`${Url.SINGLE_ADVERT}/${this.props.match.params.slug}`, await config());
        console.log(response)
        if (response.status === 200) {
            if(!this._isMounted){
                this.setState({
                    organization_id: response.data.banner.organization_id._id,
                    amount: response.data.banner.amount,
                    // start_time: moment(response.data.banner.start_time).format('MMMM Do YYYY, h:mm'),
                    start_time: moment(response.data.banner.start_time),
                    // end_time: moment(response.data.banner.end_time),
                    end_time: moment(response.data.banner.end_time),
                    desktop_images: response.data.banner.desktop_image,
                    tablets_images: response.data.banner.tablet_image,
                    mobile_images: response.data.banner.mobile_image,
                    _id: response.data.banner._id,
                    spinning: false
                });
            }

        }
        console.log(this.state._id,'state=============>')
    }
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
    handleInputChange = ({target:{value,name}}) => {
        this.setState({
            [name]: value
        });
    };
    handleValidation = () => {
        const {organization_id,start_time,end_time,amount} = this.state;

        let organizationValidation = {
            message: 'organization is Required',
            status: false
        };let startTimeValidation = {
            message: 'startTime is Required',
            status: false
        };let endTimeValidation = {
            message: 'endTime is Required',
            status: false
        };let amountValidation = {
            message: 'amount is Required',
            status: false
        };
        let passed = {
            status: true
        };
        return  organization_id !== '' ?
            start_time === '' ? startTimeValidation :
                end_time === '' ? endTimeValidation :
                    amount === '' ? amountValidation:
                        passed : organizationValidation
    }

    updateAdvert = async (e) => {
        e.preventDefault();
        const {organization_id,start_time,end_time,amount,desktop_images,
            tablets_images,
            mobile_images,_id} = this.state;
        let validation = this.handleValidation();
        if(validation.status){
            let data = new FormData()
            data.append('organization_id',organization_id)
            data.append('start_time',start_time)
            data.append('end_time',end_time)
            data.append('amount',amount)
            data.append('desktop_images',desktop_images)
            data.append('tablets_images',tablets_images)
            data.append('mobile_images',mobile_images)
            console.log({data},'data=>>>>>>>>>>>>>>')
            this.setState({loading: true});
            let response = await ApiCall.post(`${Url.UPDATE_ADVERT}/${this.props.match.params.slug}`, data, await config());
            console.log({response})
            if (response.status === 200) {
                this.setState(initialState);
                this.props.history.push('/app/advert/view')
                return NotificationManager.success(
                    "Advert Updated Successfully",
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
    handleInputChange = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        });
    };
    handleOrganization = ({target:{value}}) => {
        if (value !== 'null') {
            this.setState({organization_id: value})
        } else {
            this.setState({organization_id: ''})
        }
    };
    handleStartDate = (date) => {
        this.setState({
            start_time: date
        });
    }
    handleEndData = (date) => {
        this.setState({
            end_time: date
        });
    }
    onFileRemove = (item)=>{
        if(item){
            this.setState({
                desktop_image: '',
                url:''
            })
        }
    };
    onTabletFileRemove = (item)=>{
        if(item){
            this.setState({
                tablets_image: '',
                url:''
            })
        }
    };  onPhoneFileRemove = (item)=>{
        if(item){
            this.setState({
                mobile_image: '',
                url:''
            })
        }
    };

    onImageChange = (file) => {
        this.setState({
            desktop_images: file

        })
    };
    onTabletImageChange = (file) => {
        this.setState({
            tablets_images: file
        })
    };
    onMobileImageChange = (file) => {
        this.setState({
            mobile_images: file
        })
    };
    render() {
        const {organization_id,start_time,end_time,amount,organizations,spinning, desktop_images,
            tablets_images,
            mobile_images,} = this.state;

        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/advert/view'><Button size='lg' color={'secondary'}><IntlMessages id={"menu.cancel"} /></Button></Link>
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
                                        <IntlMessages id="categories-create" />
                                    </CardTitle>
                                    <Form className="dashboard-quick-post" onSubmit={this.updateAdvert}>
                                        <FormGroup row>
                                            <Label sm="3">
                                                Select Organization
                                            </Label>
                                            <Colxx sm="9">
                                                <select
                                                    name="select"
                                                    className="form-control"
                                                    value={organization_id}
                                                    onChange={this.handleOrganization}
                                                >
                                                    <option value='null'>Select an option..</option>
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
                                        {/*start time*/}
                                        <FormGroup row>
                                            <Label sm="3">
                                                Start Time
                                            </Label>
                                            <Colxx sm="9">
                                                <DatePicker
                                                    selected={start_time}
                                                    onChange={this.handleStartDate}
                                                    placeholderText={'Pick a date'}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={1}
                                                    dateFormat="LLL"
                                                    timeCaption="Time"
                                                />
                                            </Colxx>
                                        </FormGroup>
                                        {/*end time*/}
                                        <FormGroup row>
                                            <Label sm="3">
                                                End Time
                                            </Label>
                                            <Colxx sm="9">
                                                <DatePicker
                                                    selected={end_time}
                                                    onChange={this.handleEndData}
                                                    placeholderText={'Pick a date'}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={1}
                                                    dateFormat="LLL"
                                                    timeCaption="Time"
                                                />
                                            </Colxx>
                                        </FormGroup>
                                        {/*amount */}
                                        <FormGroup row>
                                            <Label sm="3">
                                                Amount
                                            </Label>
                                            <Colxx sm="9">
                                                <Input type="number" value={amount} onChange={this.handleInputChange} name="amount" placeholder={'Enter amount in $ *'} required/>
                                            </Colxx>
                                        </FormGroup>
                                        {/*Large Screen*/}
                                        {desktop_images &&
                                        <FormGroup row>
                                            <Label sm="3">
                                                Pictures [max-width: 1200]
                                            </Label>
                                            <Colxx sm="9">
                                                <DropzoneExample
                                                    fileTypes={'image/*'}
                                                    removeFile={this.onFileRemove}
                                                    onChange={this.onImageChange}
                                                    // maxFiles={5}
                                                    url={`${base}${desktop_images}`}
                                                />
                                            </Colxx>
                                        </FormGroup>}
                                        {/*tablets screen*/}
                                        {tablets_images &&
                                        <FormGroup row>
                                            <Label sm="3">
                                                Pictures [max-width: 768px]
                                            </Label>
                                            <Colxx sm="9">
                                                <DropzoneExample
                                                    fileTypes={'image/*'}
                                                    removeFile={this.onTabletFileRemove}
                                                    onChange={this.onTabletImageChange}
                                                    // maxFiles={5}
                                                    url={`${base}${tablets_images}`}
                                                />
                                            </Colxx>
                                        </FormGroup> }
                                        {/*Mobiles Screen*/}
                                        {mobile_images &&
                                        <FormGroup row>
                                            <Label sm="3">
                                                Pictures [max-width: 480px]
                                            </Label>
                                            <Colxx sm="9">
                                                <DropzoneExample
                                                    fileTypes={'image/*'}
                                                    removeFile={this.onPhoneFileRemove}
                                                    onChange={this.onMobileImageChange}
                                                    // maxFiles={5}
                                                    url={`${base}${mobile_images}`}
                                                />
                                            </Colxx>
                                        </FormGroup>}

                                        <Button
                                            className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                                            color="primary" disabled={this.state.loading}>
                                        <span className="spinner d-inline-block"><span className="bounce1"/><span className="bounce2"/><span className="bounce3"/></span>
                                            {/*<span className="label"><IntlMessages id="category.update"/></span>*/}
                                            <span className="label">Update Advert</span>
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
