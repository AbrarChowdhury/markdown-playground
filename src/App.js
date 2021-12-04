import { marked } from 'marked';
import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Display from './components/Display';
import { Grid, Container } from '@mui/material';

function App() {

  const [html, setHtml] = useState(marked.parse("# Markdown Playground\n ### Feel free to make changes on the editor.\ncreated by: **Abrar Shams Chowdhury**"))
  
  return (
    <div className="App">
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}><Editor sethtml={setHtml}/></Grid>
        <Grid item xs={6}><Display html={html}/></Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default App;
