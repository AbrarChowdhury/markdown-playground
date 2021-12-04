import React from 'react'
import { marked } from 'marked';
import { Paper, TextField } from '@mui/material'

function Editor({ setHtml }) {

const handleChange = (e) => {
    e.preventDefault() 
    setHtml(marked.parse(e.target.value))
}

    return (
        <Paper className="container" id="editor">
            <Paper className="header"><h2 className="title">Editor</h2></Paper>
            <div style={{padding:"0 10px"}}>
                <TextField     
                    multiline
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    defaultValue="# Markdown  Playground                                                                          ### Feel free to make changes on the editor.                                                                                                          created by: **Abrar Shams Chowdhury**"
                />
            </div>
            
            <br/>
        </Paper>
    )
}

export default Editor
