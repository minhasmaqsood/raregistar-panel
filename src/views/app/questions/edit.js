import React, { Component, Fragment } from "react";
import { Row, Col, CustomInput } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
  Input
} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ApiCall from '../../../config/network';
import Url from '../../../config/api';
import { NotificationManager } from "../../../components/common/react-notifications";
import { config } from "../../../config/env";
import { ChromePicker } from 'react-color';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';
import { base } from '../../../config/env'
import DropzoneExample from "../../../containers/forms/DropzoneExample";
import { skyblue } from "color-name";
import AppModal from "../../../components/durationPicker/Modal";
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
  quizType: '',
  quizId: '',
  isOpen: false,
  optionsImages: [],
  questionImages: [],
  updatingImages: [],
}
export default class UpdateSignal extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };
  componentDidMount() {
    this._isUnmounted = false;
    this.getSignalData();
  }
  componentWillUnmount() {
    this._isUnmounted = true;
  }
  getSignalData = async () => {
    if (!this._isUnmounted) {
      let response = await ApiCall.get(`${Url.VIP_SIGNAL_EDIT}/${this.props.match.params.id}`, await config());
      // console.log(response)


      if (response.status === 200) {
        let detailedTextFrench;
        let detailedTextDutch;
        let frenchId;
        let dutchId;
        if (response.data.signal.translations.length === 0) {
          detailedTextFrench = ''
          detailedTextDutch = ''
        } else if (response.data.signal.translations.length === 1) {
          if (response.data.signal.translations.filter(item => item.language.name === 'French').length > 0) {
            detailedTextFrench = response.data.signal.translations.filter(item => item.language.name === 'French')[0].body[0].description;
            frenchId = response.data.signal.translations.filter(item => item.language.name === 'French')[0].id;
          } else if (response.data.signal.translations.filter(item => item.language.name === 'Dutch').length > 0) {
            detailedTextDutch = response.data.signal.translations.filter(item => item.language.name === 'Dutch')[0].body[0].description;
            dutchId = response.data.signal.translations.filter(item => item.language.name === 'Dutch')[0].id;
          }
        } else if (response.data.signal.translations.length === 2) {
          detailedTextFrench = response.data.signal.translations.filter(item => item.language.name === 'French')[0].body[0].description;
          detailedTextDutch = response.data.signal.translations.filter(item => item.language.name === 'Dutch')[0].body[0].description;
          frenchId = response.data.signal.translations.filter(item => item.language.name === 'French')[0].id;
          dutchId = response.data.signal.translations.filter(item => item.language.name === 'Dutch')[0].id;
        }
        this.setState({
          title: response.data.signal.title,
          subtitle: response.data.signal.subTitle,
          entryPoint: response.data.signal.entryPoint,
          isOpened: response.data.signal.isOpened,
          openedDateTime: moment(response.data.signal.openDate),
          tradesList: response.data.signal.details,
          id: response.data.signal.id,
          translations: response.data.signal.translations,
          detailedText: response.data.signal.description,
          detailedTextDutch, detailedTextFrench, frenchId, dutchId,
          languages: response.data.languages.map(item => {
            return {
              label: item.name,
              key: item.id,
              value: item.id
            }
          }),
          selectedLanguages: response.data.signal.translations.map(item => {
            return { value: item.language.id, key: item.language.id, label: item.language.name }
          }),
          spinning: false,
        })
      }
    }
  }
  closeModal = (duration, index) => {
    this.setState({
      isOpen: false
    })
    this.questionDurationChangeHandler(duration, index)
  }
  openModal = () => {
    this.setState({
      isOpen: true
    })
  }
  questionDurationChangeHandler = (duration, index) => {
    let questions = this.state.questions
    questions[index].duration = {
      ...duration
    }
    this.setState({
      questions: questions
    })
  }

  updateQuiz = async (e) => {
    e.preventDefault();
    const {
      category_id,
      age_id,
      title,
      questions,
      quizType,
      optionsImages,
      questionImages,
      quizId,
    } = this.state;
    let validation = this.handleValidation()
    if (validation.status) {
      this.setState({ loading: true });
      const data = new FormData();
      data.append('quiz_id', quizId)
      data.append('name', title)
      data.append('type', quizType)
      data.append('category_id', category_id)
      data.append('age_id', age_id)
      data.append('questions', JSON.stringify(questions))
      questionImages.map((question) => {
        data.append(question.key, question.value)
        return null
      })
      optionsImages.map((question) => {
        data.append(question.key, question.value)
        return null
      })

    }
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
  handleChangeContent = (content) => {
    this.setState({ detailedText: content });
  };
  handleAttributeChange = (e) => {
    this.setState({
      isOpened: e.target.checked
    })
  };
  //   questionImages.push({ key: `q${index}`, value: image })
  //   this.setState({
  //     questionImages: questionImages
  //   })
  //   this.setState({
  //     questions: questions
  //   })
  // }
  onFileRemove = (image, index) => {
    let questionImages = this.state.questionImages
    questionImages.push({ key: `q${index}`, value: image })
    this.setState({
      questionImages: questionImages
    })
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
    questions[index].value = event.target.value;
    this.setState({
      questions: questions
    })
    this.setState({ show: !this.state.show })
  };


  //questions states
  addQuestionsListInput = () => {
    // let questions = {'type_id': '', 'duration': '', 'question': [{}]};
    let questionLength = this.state.questions.length
    let questions = { 'type': '', 'duration': '', name: `q${questionLength}`, 'options': [] };
    this.setState(prevState => ({ questions: [...prevState.questions, questions] }));
  };

  //Questions text render
  AddQuestionsList = () => {
    // debugger
    return this.state.questions.map((el, index) => {

      return (
        <div key={index.toString()}>
          <Row>
            <Col xs={10} >
              <FormGroup row>
                <Colxx sm="12">
                  <h4> {
                    this.state.questions[index].duration &&
                    `Duration ${this.state.questions[index].duration.minutes} : ${this.state.questions[index].duration.seconds} sec`}</h4>
                </Colxx>
              </FormGroup>
              <FormGroup row>
                <Colxx sm="12">
                  <Button onClick={this.openModal}>
                    Set Duration
                  </Button>
                  <AppModal
                    isOpen={this.state.isOpen}
                    setIsOpen={this.openModal}
                    onCloseModal={(duration) => this.closeModal(duration, index)}
                    initialDuration={this.state.questions[index].duration || undefined}
                  />
                </Colxx>
              </FormGroup>
            </Col>
            <Col xs='10'>
              <FormGroup row>
                <Colxx sm="12">
                  <select
                    name="select"
                    className="form-control"
                    value={this.state.questions[index].type}
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
            {this.state.questions[index].type === 'images' && (
              <Col xs='10'>
                <FormGroup row>

                  {
                    this.state?.updatingImages[index]?.updating === false ?
                      <Colxx xs='10'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <img src={`${base}/${this.state.questions[index].value}`} width={250} height={150} alt='no preview' />
                          <Button onClick={() => this.updateHandler(index, -1)}>Change</Button>
                        </div>
                      </Colxx>
                      :
                      <>
                        <Label xs='10'>
                          {/*<IntlMessages id="categories-type"/>*/}
                          Select Image
                        </Label>
                        <Colxx xs='10'>
                          <DropzoneExample
                            fileTypes={'image/*'}
                            removeFile={(image) => this.onFileRemove(image, index)}
                            onChange={(image) => this.handleQuestionImage(image, index)}
                          />
                        </Colxx>
                      </>

                  }

                </FormGroup>
              </Col>)}
            {this.state.questions[index].type === 'text' && (
              <Col xs='10'>
                <FormGroup row>
                  <Colxx sm="12">
                    <Input type="text" value={this.state.questions[index].value}
                      onChange={this.handleQuestionsText(index)} name='question'
                      placeholder={'Enter your question *'} required />
                  </Colxx>
                </FormGroup>
              </Col>
            )}
            {this.state.questions[index].type === '' && ''}
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
                this.state.questions[index].type === 'images' || this.state.questions[index].type === 'text' ? (

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
    const questions = this.state.questions
    let optionsLength = questions[index].options.length
    let option = { 'type': '', 'value': '', name: `q${index}o${optionsLength}`, isAnswer: false };

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
    let optionsImages = this.state.optionsImages
    let imagePresence = optionsImages.filter(({ key, value }) => key === `q${index}o${index2}`)
    if (imagePresence.length > 0) {
      imagePresence.value = image
      optionsImages = [
        ...optionsImages,
        {
          ...imagePresence
        }
      ]
    }
    else {
      optionsImages.push({ key: `q${index}o${index2}`, value: image })
    }
    this.setState({
      optionsImages: optionsImages
    })
    questions[index].options[index2].value = '';
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
  updateHandler = (index, index2) => {
    let updatingImages = this.state.updatingImages;
    if (index2 < 0) {
      updatingImages[index].updating = !updatingImages[index].updating
      this.setState({ updatingImages: updatingImages })
    }
    else {
      updatingImages[index].options[index2].updating = !updatingImages[index].options[index2].updating
      this.setState({ updatingImages: updatingImages })
    }
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

                  {
                    this.state?.updatingImages[index]?.options[index2]?.updating === false ?
                      <Colxx xs='12'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <img src={`${base}/${this.state.questions[index].options[index2].value}`} width={250} height={150} alt='no preview' />
                          <Button onClick={() => this.updateHandler(index, index2)}>Change</Button>
                        </div>
                      </Colxx>
                      :
                      <>
                        <Label xs='10'>
                          Select Image
                        </Label>
                        <Colxx xs='10'>
                          : <DropzoneExample
                            fileTypes={'image/*'}
                            removeFile={(image) => this.handleOptionsImageRemove(image, index, index2)}
                            onChange={(image) => this.handleOptionsImage(image, index, index2)}
                          />
                        </Colxx>
                      </>
                  }
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
      if (e.target.value === 'text') {
        let questionImages = this.state.questionImages
        questionImages.splice(index, 1)
        // this.setState({
        //   tradesList: tradesList
        // })
      };

    }
  }
}
