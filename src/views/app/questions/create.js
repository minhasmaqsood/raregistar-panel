import React, { Component, Fragment } from "react";
import { Button, Card, CardBody, CardTitle, Col, CustomInput, Form, FormGroup, Input, Label, Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import { config } from "../../../config/env";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';
import DropzoneExample from "../../../containers/forms/DropzoneExample";
const quillModules = {
    toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
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
    title: '',
    subtitle: '',
    entryPoint: '',
    show: false,
    rendered: false,
    detailedTextFrench: '',
    detailedTextDutch: '',
    selectedCategory: '',
    selectedAge: '',
    category_id: '',
    age_id: '',
    type_id: '',
    duration: '',
    images: '',
    // questions: [],
    categories: [],
    ages: [],
    questions: [],
    optionsList: [],
    openedDateTime: moment(),
    languages: [],
    detailedText: '',
    loading: false,
    quizType: ''
}
export default class CreateSignal extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    componentDidMount() {
        this._isUmounted = false;
        this.getAllCategories();
        this.getAllAges();
    };

    getAllAges = async () => {
        this.setState({ spinning: true });
        if (!this._isMounted) {
            let response = await ApiCall.get(Url.ALL_AGE, await config())
            if (response.status === 200) {
                this.setState({ ages: response.data.ages.reverse(), spinning: false });
            }
        }
    };
    getAllCategories = async () => {
        this.setState({ spinning: true });
        if (!this._isMounted) {
            let response = await ApiCall.get(Url.ALL_CATEGORY, await config())

            if (response.status === 200) {
                this.setState({ categories: response.data.categories.reverse(), spinning: false });
            }
        }
    };

    componentWillUnmount() {
        this._isUmounted = true
    };
    createQuiz = async (e) => {
        e.preventDefault();
        const {
            category_id,
            age_id,
            title,
            questions,
            quizType
        } = this.state;
        let validation = this.handleValidation()
        if (validation.status) {
            this.setState({ loading: true });
            const data = new FormData();
            data.append('name', title)
            data.append('type', quizType)
            data.append('category_id', category_id)
            data.append('age_id', age_id)
            data.append('questions', JSON.stringify(questions))

            let response = await ApiCall.post(Url.CREATE_QUESTION, data, await config());
            if (response.status === 200) {
                this.setState(initialState);
                this.props.history.push('/app/question/view')
                return NotificationManager.success(
                    "Quiz Stored Successfully",
                    "Success",
                    3000,
                    null,
                    null,
                    'filled'
                );
            } else {
                this.setState({ loading: false });
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
    handleValidation = () => {
        const {
            category_id,
            age_id,
            title,
            questions,
        } = this.state;
        let titleValidation = {
            message: 'Name is Required',
            status: false
        };
        let categoryValidation = {
            message: 'Category is required',
            status: false
        };
        let ageValidation = {
            message: 'Age is required',
            status: false
        };
        let questionsValidation = {
            message: 'Please add one or more question',
            status: false
        };
        let passed = {
            status: true
        };
        return title !== '' ?
            category_id === '' ? categoryValidation :
                age_id === '' ? ageValidation :
                    questions.length === 0 ? questionsValidation :
                        passed : titleValidation
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onImageChange = (file) => {
        this.setState({
            logo: file
        })

    };
    onFileRemove = (item) => {
        if (item) {
            this.setState({
                logo: ''
            })
        }
    };
    handleChangeDateTime = date => {
        this.setState({
            openedDateTime: date
        });
    };

    handleQuestionsListChange = (index) => (event) => {
        let questions = this.state.questions;
        questions[index].duration = event.target.value;
        this.setState({
            questions: questions
        })
        // this.setState( {show: !this.state.show})
    };
    handleQuestionsText = (index) => (event) => {
        let questions = this.state.questions;
        questions[index].question = event.target.value;
        this.setState({
            questions: questions
        })

        this.setState({ show: !this.state.show })
    };


    //questions states
    addQuestionsListInput = () => {
        // let questions = {'type_id': '', 'duration': '', 'question': [{}]};
        let questions = { 'type_id': '', 'duration': '', 'options': [] };
        this.setState(prevState => ({ questions: [...prevState.questions, questions] }));
    };

    //Questions text render
    AddQuestionsList = () => {
        return this.state.questions.map((el, index) => {

            return (
                <div key={index.toString()}>
                    <Row>
                        <Col xs='10'>
                            <FormGroup row>
                                <Colxx sm="12">
                                    <select
                                        name="select"
                                        className="form-control"
                                        value={this.state.questions[index].type_id}
                                        onChange={(e) => this.handleSelectedType(e, index)}
                                    >
                                        <option value='null'>Select an option..</option>
                                        <option value='text'>Text</option>
                                        <option value='images'>Image</option>
                                    </select>
                                </Colxx>
                            </FormGroup>
                        </Col>
                        {/* <Col xs={10}>
                        <TextEditor />
                        </Col> */}
                        {this.state.questions[index].type_id === 'images' && (
                            <Col xs='10'>
                                <FormGroup row>
                                    <Label xs='10'>
                                        {/*<IntlMessages id="categories-type"/>*/}
                                        Select Image
                                    </Label>
                                    <Colxx xs='10'>
                                        <DropzoneExample
                                            fileTypes={'image/*'}
                                            removeFile={this.onFileRemove}
                                            onChange={this.onImageChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                            </Col>)}
                        {this.state.questions[index].type_id === 'text' && (
                            <Col xs='10'>
                                <FormGroup row>
                                    <Colxx sm="12">
                                        <Input type="text" value={this.state.questions[index].question}
                                            onChange={this.handleQuestionsText(index)} name='question'
                                            placeholder={'Enter your question *'} required />
                                    </Colxx>
                                </FormGroup>
                            </Col>
                        )}
                        {this.state.questions[index].type_id === '' && ''}
                        <div className="col-md-2">
                            <div className="form-group">
                                <Button
                                    color='danger'
                                    size={'sm'}
                                    onClick={() => {
                                        this.removeQuestion(index);
                                    }}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                        <Col xs='10'>
                            {
                                this.state.questions[index].type_id === 'images' || this.state.questions[index].type_id === 'text' ? (

                                    <FormGroup row>

                                        <Colxx sm="12">
                                            {this.AddOptionsList(index)}
                                            <button
                                                style={{
                                                    "height": "20px",
                                                    "display": "flex",
                                                    "alignItems": "center"
                                                }}
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => this.addOptionsListInput(index)}
                                            >
                                                Add Options
                                            </button>
                                        </Colxx>
                                    </FormGroup>
                                ) : ''
                            }
                        </Col>
                    </Row>
                    {/*<hr />*/}
                </div>
            )
        });
    };

    // options state
    addOptionsListInput = (index) => {
        let option = { 'type': '', 'value': '', isAnswer: false };
        const questions = this.state.questions

        questions[index].options.push(option)
        this.setState(prevState => ({ ...prevState, questions }));
    }

    handleOptionTypeChange = (event, index, index2) => {
        let questions = this.state.questions;
        if (event.target.value !== 'null') {
            questions[index].options[index2].type = event.target.value;
            this.setState({
                questions: questions
            })
        } else {
            questions[index].options[index2].type = ''
            this.setState({ questions: questions })
        }
    }

    handleOptionsText = (event, index, index2) => {
        let questions = this.state.questions;
        questions[index].options[index2].value = event.target.value;
        this.setState({
            questions: questions
        })
    }

    handleOptionsImage = (image, index, index2) => {
        let questions = this.state.questions;
        questions[index].options[index2].value = image;
        this.setState({
            questions: questions
        })
    }
    handleOptionsImageRemove = (image, index, index2) => {
        if (image) {
            let questions = this.state.questions;
            questions[index].options[index2].value = image;
            this.setState({
                questions: questions
            })
        }

    }

    handleAnswerRadio = (event, index, index2) => {
        let questions = this.state.questions;
        questions[index].options.forEach(item => {
            item.isAnswer = false
        })
        questions[index].options[index2].isAnswer = event.target.checked;
        this.setState({
            questions: questions
        })
    }
    // options text render
    AddOptionsList = (index) => {
        return this.state.questions[index].options.map((el, index2) => {
            return (
                <div key={index2.toString()}>
                    <Row>
                        <Col xs='10'>
                            <FormGroup row>
                                <Label xs='10'>
                                    {/*<IntlMessages id="categories-type"/>*/}
                                    Select Option {index2 + 1} Type
                                </Label>
                                <Colxx sm="12">
                                    <select
                                        name="select"
                                        className="form-control"
                                        value={this.state.questions[index].options[index2].type}
                                        onChange={(e) => this.handleOptionTypeChange(e, index, index2)}
                                    >
                                        <option value='null'>Select an option..</option>
                                        <option value='text'>Text</option>
                                        <option value='images'>Image</option>
                                    </select>
                                </Colxx>
                            </FormGroup>
                        </Col>

                        {this.state.questions[index].options[index2].type === 'text' ? (
                            <Col xs='10'>
                                <FormGroup row>
                                    <Label sm="12">
                                        Text
                                    </Label>
                                    <Colxx sm="12">
                                        <Input type="text" value={this.state.questions[index].options[index2].value}
                                            onChange={(event) => this.handleOptionsText(event, index, index2)}
                                            name="option-1"
                                            required
                                            placeholder={'Enter first option *'} required />
                                    </Colxx>
                                </FormGroup>
                            </Col>
                        ) : this.state.questions[index].options[index2].type === 'images' ? (
                            <Col xs='10'>
                                <FormGroup row>
                                    <Label xs='10'>
                                        Select Image
                                    </Label>
                                    <Colxx xs='10'>
                                        <DropzoneExample
                                            fileTypes={'image/*'}
                                            removeFile={(image) => this.handleOptionsImageRemove(image, index, index2)}
                                            onChange={(image) => this.handleOptionsImage(image, index, index2)}
                                        />
                                    </Colxx>
                                </FormGroup>
                            </Col>
                        ) : (' ')

                        }
                        {this.state.questions[index].options[index2].type && this.state.questions[index].options.length > 0 && (

                            <Col xs='10'>
                                <FormGroup>
                                    <Colxx sm="12">
                                        <CustomInput
                                            type="checkbox"
                                            key={index2}
                                            name='isAnswer'
                                            checked={this.state.questions[index].options[index2].isAnswer}
                                            onChange={(event) => this.handleAnswerRadio(event, index, index2)}
                                            id={index2}
                                            label={'isAnswer'}
                                        />
                                    </Colxx>
                                </FormGroup>
                            </Col>
                        )}


                        <div className="col-md-2 mt-md-5">
                            <div className="form-group">
                                <Button
                                    color='danger'
                                    size={'sm'}
                                    onClick={() => {
                                        this.removeOptions(index, index2);
                                    }}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </Row>
                </div>
            )
        });
    };


    //remove questions and option handlers
    removeQuestion = (index) => {
        let questions = [...this.state.questions];
        questions.splice(index, 1);
        this.setState({ questions });
    };
    removeOptions = (index, index2) => {
        let questions = [...this.state.questions];
        questions[index].options.splice(index2, 1);
        this.setState({ questions });
    };


    handleBGChangeComplete = (index, color) => {
        let tradesList = this.state.tradesList;
        tradesList[index].background_color = color.hex;
        this.setState({
            tradesList: tradesList
        })
    };
    handleTextColorChangeComplete = (index, color) => {
        let tradesList = this.state.tradesList;
        tradesList[index].text_color = color.hex;
        this.setState({
            tradesList: tradesList
        })
    };
    handleAttributeChange = (e) => {
        this.setState({
            isOpened: e.target.checked
        })
    };
    handleSelectedCategories = (e) => {
        if (e.target.value !== 'null') {
            this.setState({ category_id: e.target.value })
        } else {
            this.setState({ category_id: '' })
        }
    };
    handleSelectedAges = (e) => {

        if (e.target.value !== 'null') {
            this.setState({ age_id: e.target.value })
        } else {
            this.setState({ age_id: '' })
        }
    };
    handleSelectedType = (e, index) => {
        const { show } = this.state
        let questions = this.state.questions;

        if (e.target.value !== 'null') {
            questions[index].type_id = e.target.value;
            this.setState({
                questions: questions
            })
        } else {
            questions[index].type_id = ''
            this.setState({ questions: questions })
        }
        this.setState({ show: !show })
    };


    handleOptionsSelectedType = (e, index) => {
        let optionList = this.state.optionsList;
        if (e.target.value !== 'null') {
            optionList[index].questionType_id = e.target.value;
            this.setState({
                questions: optionList
            })
        } else {
            optionList[index].questionType_id = ''
            this.setState({ optionList: optionList })
        }
    };
    //duraton state
    handleDuration = (index) => (duration) => {


        const { hours, minutes, seconds } = duration;
        let questions = this.state.questions;
        questions[index].duration = { hours, minutes, seconds };
        this.setState({
            questions: questions
        })

        // this.setState({ hours, minutes, seconds });
    };

    render() {
        const {
            category_id,
            ages,
            categories,
            age_id,
            loading,
            title,
            show,
            subtitle,
            entryPoint,
            type_id,
            openedDateTime,
        } = this.state;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="text-zero top-right-button-container">
                            <Link to='/app/question/view'><Button size='lg' color={'secondary'}><IntlMessages
                                id={"menu.cancel"} /></Button></Link>
                        </div>
                        <Breadcrumb heading="menu.create" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                {loading ? <div className='loading' /> :
                    <Row>
                        <Col xxs="10">
                            <div className='col-sm-12 col-lg-10 col-xs-12 '>
                                <Card>
                                    <div className="position-absolute card-top-buttons">
                                    </div>
                                    <CardBody>
                                        <CardTitle>
                                            Create Quiz questions
                                        </CardTitle>
                                        <Form className="dashboard-quick-post" onSubmit={this.createQuiz}>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    Name
                                                </Label>
                                                <Colxx sm="9">
                                                    <Input type="text" value={title} onChange={this.handleInputChange}
                                                        name="title" placeholder={'Enter quiz name *'} required />
                                                </Colxx>
                                            </FormGroup>
                                            {/* <Col xs='10'> */}
                                            <FormGroup row>
                                                <Label sm="3">Quiz Type</Label>
                                                <Colxx sm="9">
                                                    <select
                                                        name="select"
                                                        className="form-control"
                                                        value={this.state.quizType}
                                                        onChange={(e) => this.setState({ quizType: e.target.value })}
                                                    >
                                                        <option value='null'>Select an option..</option>
                                                        <option value='maths'>Maths</option>
                                                        <option value='science'>Science</option>
                                                    </select>
                                                </Colxx>
                                            </FormGroup>
                                            {/* </Col> */}
                                            <FormGroup row>
                                                <Label sm="3">
                                                    Select category
                                                </Label>
                                                <Colxx sm="9">
                                                    <select
                                                        name="select"
                                                        className="form-control"
                                                        value={category_id}
                                                        onChange={this.handleSelectedCategories}
                                                    >
                                                        <option value='null'>Select an option..</option>
                                                        {
                                                            categories.map((item) => {
                                                                return (
                                                                    <option key={item._id}
                                                                        value={item._id}>{item.name}</option>
                                                                )
                                                            })
                                                        }

                                                    </select>
                                                </Colxx>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm="3">
                                                    Select Age
                                                </Label>
                                                <Colxx sm="9">
                                                    <select
                                                        name="select"
                                                        className="form-control"
                                                        value={age_id}
                                                        onChange={this.handleSelectedAges}
                                                    >
                                                        <option value='null'>Select an option..</option>
                                                        {
                                                            ages.map((item) => {
                                                                return (
                                                                    <option key={item._id}
                                                                        value={item._id}>{item.name}</option>
                                                                )
                                                            })
                                                        }

                                                    </select>
                                                </Colxx>
                                            </FormGroup>


                                            <FormGroup row>
                                                <Label sm="3">
                                                    Add Question
                                                </Label>
                                                <Colxx sm="9">
                                                    {this.AddQuestionsList()}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={() => this.addQuestionsListInput()}
                                                    >
                                                        Add new Question
                                                    </button>
                                                </Colxx>
                                            </FormGroup>


                                            <Button
                                                className={`float-right btn-shadow btn-multiple-state ${this.state.loading ? "show-spinner" : ""}`}
                                                color="primary" disabled={this.state.loading}>
                                                <span className="spinner d-inline-block">
                                                    <span className="bounce1" />
                                                    <span className="bounce2" />
                                                    <span className="bounce3" />
                                                </span>
                                                <span className="label"><IntlMessages id="partner.create" /></span>
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
