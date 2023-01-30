import React from 'react'
import '../styles/TextEditor.css'

import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

import { Document, Page, PDFDownloadLink, Text } from '@react-pdf/renderer';





function TextEditor({handlePlanChange , plan}) {
    
    //modules for custom toolbar
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline']
        ],
    };   

    //function to render document as pdf. regex to remove html tags
    function MyDocument () {
        return(
            <Document>
                <Page>
                    <Text>{plan.replace(/(<([^>]+)>)/gi,' ')}</Text>
                </Page>
            </Document>
        )
    }


  return (
    <div className='text-editor-container'>
        <div className='row'>
            <div className='editor'>
            <PDFDownloadLink document={<MyDocument />} filename="FORM">
                {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
            </PDFDownloadLink>
                <ReactQuill 
                    className='editor-input' 
                    theme='snow' 
                    value={plan}
                    onChange={handlePlanChange}
                    modules={modules}
                />
            </div>
        </div>
    </div>
  )
}

export default TextEditor