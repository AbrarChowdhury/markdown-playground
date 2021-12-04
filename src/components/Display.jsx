import React from 'react'
import { Paper } from '@mui/material'
import ReactHtmlParser from 'react-html-parser'

function Display({html}) {
    return (
        <Paper className="container" id="preview">
            <Paper className="header"><h2 className="title">Previewer</h2></Paper>
            <div style={{padding:"0 30px", overflowX:"auto" }}>
                {ReactHtmlParser(html)}
            </div>
        </Paper>
    )
}

export default Display
