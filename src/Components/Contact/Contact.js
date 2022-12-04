import React from 'react'
import "./Contact.css"
import { TextField, Button, createTheme, ThemeProvider, FormControl } from '@mui/material';

const blue = createTheme({
  palette: {
    primary: {
      main: 'rgb(35, 179, 204)',
    },
  },
});

export default function Contact() {

  const handleSubmit = (event) => {
    console.log("Asdad")
  }


  return (
    <section className='Contact section' id='CONTACT'>
      <div className='Contact-text ' id='Contact-box'>CONTACT</div>

      <div className='Contact-box hide-scale'>
        <div>
          <div className='Contact-box-text'>
            <span className='hide-scale hide-scale-mobile'>Send me a message!</span>
            <span className='hide-scale hide-scale-mobile'>Fell free to ask questions, send proposes</span>
          </div>
          <ThemeProvider theme={blue}>
            <FormControl className="mainPageContact-form" onSubmit={handleSubmit}>
              <TextField
                className='hide-scale hide-scale-mobile'
                required
                id="outlined-required"
                label="E-mail"
              />
              <TextField
                className='hide-scale hide-scale-mobile'
                id="outlined"
                label="Phone number"
              />
              <TextField
                className='hide-scale hide-scale-mobile'
                required
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={6}
              />
              <Button variant="contained" className="button-send hide-scale hide-scale-mobile">Send message</Button>
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
    </section>
  )
}