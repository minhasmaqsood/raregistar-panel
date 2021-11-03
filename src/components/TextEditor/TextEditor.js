import React, { useState } from 'react'
// import '../../../node_module/@hawk-ui/rich-text-editor/dist/index.min.css'
import RichTextEditor from '@hawk-ui/rich-text-editor';

const TextEditor = () => {
  // initialState = {
  //   body: '',
  // };
  const [body, setBody] = useState({ body: '' })
  return (
    <RichTextEditor
      toolbarClass="toolbar"
      editableClass="editable"
      editableId="containerEditable1"
      placeholder="Click here to start typing"
      toolbarItems={[
        'bold', 'italic', 'underline', 'link', 'unlink', 'strike through', 'ordered list'
        , 'unordered list', 'formatblock', 'cut', 'copy', 'print', 'pre', 'header', 'font family'
        , 'font size', 'select all', 'text color picker', 'background color picker', 'remove format', 'clean', 'divider', 'left justify'
        , 'center justify', 'right justify', 'outdent', 'indent', 'undo', 'redo', 'image'
      ]}
      htmlAttributes={{
        rows: '10',
      }}
      // value={body}
      onChange={({ html, text }) => {
        setBody({ body: html });
      }}
    />
  )
}

export default TextEditor