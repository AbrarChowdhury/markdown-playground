import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Display from './components/Display';
import { Grid, Container } from '@mui/material';

function App() {
  const [html, setHtml] = useState()
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
