import React, { useState } from 'react';
import axios from 'axios';
import './CSS/ContactPage.css'

const ContactPage = () => {

  const [formData,setFormData] = useState ({ name:'',  email:'', message:''});

  const [formError,setFormErrors] = useState ({name:'',email:''});

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({...formData, [name]:value})

    setFormErrors({...formError,[name]:''})
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (event)=>{

    event.preventDefault();

    let errors={};


    if (formData.name.trim() === '')
    {
      errors.name = 'Name is required';
    }

    if (formData.email.trim() === '')
    {
      errors.email = 'Email is required';
    }
    else if(!validateEmail(formData.email))
    {
      errors.email = 'Invalid email format';
    }

    if (Object.keys(errors).length > 0)
    {
      setFormErrors(errors);
      return;
    }

    const confirmSubmission = window.confirm(`Are you sure you want to submit this from ❓`)

    if(confirmSubmission)
    {

    try {
      const response = await axios.post('https://667e6e9cf2cb59c38dc5a38c.mockapi.io/Jarvis',
      {
        Name : formData.name,
        Email : formData.email,
        Message: formData.message
      })

     console.log(`Form Submitted : ${response.data}`);
     
     setFormData({  name:'',  email:'',   message:''})
     alert('Message send Successfully 👍');
    } catch (error) {
      console.error(`Error submitting the form : ${error}`);
      alert(`Failed to send message. Please try again later.`);
    }
  }
  else{
    window.alert(`${formData.name}! You cancelled the submission !!`)
    setFormData({  name:'',  email:'',   message:''})
    console.log('You cancelled the submission');
  }
  }


  return (
  <>
  <div id='CPBGI'>
    <div id='ContactPage'>
      <h1 id='contactHeading'>CONTACT..</h1>
              
      <form onSubmit={handleSubmit} >
        <div>

          <label for='UserName'>Your Name :</label>
          <input id='UserName' type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} required />

            {formError.name && <span className='error'>{formError.name}</span>}
        </div>

        <div >

          <label for='UserEmail'> Your Email :</label>
          <input type='email' id='UserEmail' name='email'  placeholder='Enter your email' value={formData.email} onChange={handleChange} required/> 

            {formError.email && <span className='error'>{formError.email}</span>}
        </div>

        <div >
                  
          <label for='UserMessage'>Your Message :</label>
          <textarea name='message' id='UserMessage' placeholder='Enter your Response / Query' value={formData.message} onChange={handleChange} spellCheck='true'/>

        </div>

          <button type='submit'>Send</button>


      </form>
            
    </div> 
  </div>
  </>
    );
}

export default ContactPage;
