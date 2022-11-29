import React from 'react'
import "./Contact.css"
import { TextField, Button, createTheme, ThemeProvider } from '@mui/material';

const blue = createTheme({
  palette: {
    primary: {
      main: 'rgb(35, 179, 204)',
    },
  },
});


export default function Contact() {

  return (
    <section className='Contact section' id='CONTACT'>
      <div className='Contact-text hiddenText'>CONTACT</div>

      <div className='Contact-box hide-scale'>
        <div className='Contact-map-box'>
          <div className='Contact-map'></div>
        </div>
        <div>
          <div className='Contact-box-text'>
            <span>Send me a message!</span>
            <span>Fell free to ask questions, send proposes</span>
          </div>
          <ThemeProvider theme={blue}>
            <div className="mainPageContact-form">
              <TextField
                required
                id="outlined-required"
                label="E-mail"
              />
              <TextField
                id="outlined"
                label="Phone number"
              />
              <TextField
                required
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={6}
              />
              <Button variant="contained" className="button-send">Send message</Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </section>
  )
}