import React, { useState, useRef } from 'react'
import "./Contact.css"
import { TextField, Button, createTheme, ThemeProvider, FormGroup, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';


const blue = createTheme({
  palette: {
    primary: {
      main: 'rgb(35, 179, 204)',
    },
  },
});



export default function Contact() {

  const form = useRef();

  const [currentWholeEmail, setCurrentWholeEmail] = useState(
    {
      currentEmail: "",
      currentName: "",
      currentPhone: "",
      currentMessage: ""
    }
  )

  const alertForm = document.getElementById("alertForm")
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('maks-malik', 'template_ormhnyd', form.current, 'n5sQ2FiML38oxIbua')

      .then(() => {
        setCurrentWholeEmail({
          currentEmail: "",
          currentName: "",
          currentPhone: "",
          currentMessage: ""
        })
      })
      .then(() => {
        alertForm.style.cssText = "opacity: 1"

      })

      .then(() => {
        setTimeout(() => {
          alertForm.style.cssText = "opacity: 0"
        }, 5000)

      })

  }


  return (
    <section className='Contact section' id='CONTACT'>
      <div className='Contact-text ' id='Contact-box'>CONTACT</div>

      <div className='Contact-box '>
        <form onSubmit={handleSubmit} ref={form}>
          <div className='Contact-box-text'>
            <span>Send me a message!</span>
            <span>Fell free to ask questions, send proposes</span>
          </div>
          <ThemeProvider theme={blue}>
            <FormGroup className="mainPageContact-form" >
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                type='email'
                name="email"
                value={currentWholeEmail.currentEmail || ""}
                onChange={(e) => setCurrentWholeEmail({ ...currentWholeEmail, currentEmail: e.target.value })}
              />
              <TextField
                required
                id="outlined-required"
                label="Name"
                type='text'
                name="name"
                value={currentWholeEmail.currentName || ""}
                onChange={(e) => setCurrentWholeEmail({ ...currentWholeEmail, currentName: e.target.value })}
              />
              <TextField
                id="outlined"
                label="Phone number"
                type='text'
                name="phone"
                value={currentWholeEmail.currentPhone || ""}
                onChange={(e) => setCurrentWholeEmail({ ...currentWholeEmail, currentPhone: e.target.value })}

              />
              <TextField
                type='text'
                required
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={6}
                name="message"
                value={currentWholeEmail.currentMessage || ""}
                onChange={(e) => setCurrentWholeEmail({ ...currentWholeEmail, currentMessage: e.target.value })}

              />
              <Button type='submit' variant="contained" className="button-send">Send message</Button>
            </FormGroup>
            <Alert id="alertForm" className="formAlert" severity="success">Email has been send successfully!</Alert>
          </ThemeProvider>
        </form>
      </div>
    </section>
  )
}