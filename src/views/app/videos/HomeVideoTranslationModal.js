import React from "react";
import {Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Colxx} from "../../../components/common/CustomBootstrap";

const VideoTranslationsModal = ({
                                    showModal,
                               toggle,
                               languages,
                               handleSelectLanguage,
                               selectedLanguage,
                              loadingApi,
                               storeTranslation
                           }) => {
    return (
        <Modal isOpen={showModal} toggle={toggle} size='lg'>
            <ModalHeader toggle={toggle}>
             Video Translations
            </ModalHeader>
            <ModalBody>
                <div className="react-modal-custom-overflow p-2">
                    <FormGroup row>
                        <Colxx sm="12">
                            <label>Language</label>
                            <select
                                name="select"
                                className="form-control"
                                value={selectedLanguage}
                                onChange={handleSelectLanguage}
                                placeholder='Please Select Language..'
                            >
                                <option value={null}>Please Select Language</option>
                                {languages.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}

                            </select>
                        </Colxx>
                    </FormGroup>
                </div>
            </ModalBody>
            <ModalFooter>
                    <Button disabled={loadingApi}
                            className={`float-right btn-shadow btn-multiple-state
                             ${loadingApi ? "show-spinner" : ""}`}
                            onClick={storeTranslation}
                            color="primary"
                    >
                                        <span className="spinner d-inline-block">
                                            <span className="bounce1"/>
                                            <span className="bounce2"/>
                                            <span className="bounce3"/>
                                        </span><span className="label">
                                               Store
                </span>
                    </Button>
            </ModalFooter>
        </Modal>
    )
}
export default VideoTranslationsModal;