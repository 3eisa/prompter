import React, { useState } from 'react'
import './TextEditor.css'

import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

import { Document, Page, PDFDownloadLink, Text } from '@react-pdf/renderer';





function TextEditor({handlePlanChange , plan}) {
    
    const [pdfOpen, setPdfOpen] = useState(false);
    
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline']
        ],
    };   


    function MyDocument () {
        return(
            <Document>
                <Page>
                    <Text>{plan.replace(/(<([^>]+)>)/gi,'')}</Text>
                </Page>
            </Document>
        )
    }


  return (
    <div className='text-editor-container'>
        <div className='row'>
            <div className='editor'>
                <ReactQuill 
                    className='editor-input' 
                    theme='snow' 
                    value={plan}
                    onChange={handlePlanChange}
                    modules={modules}
                    
                />
            </div>

            <PDFDownloadLink document={<MyDocument />} filename="FORM">
                {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
            </PDFDownloadLink>

        </div>
    </div>
  )
}

export default TextEditor