import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

//Styling Imports
import {
  SignupWrapper,
  Form,
  Input,
  Button,
} from "./addClassElements";

const AddClass = () => {
  const [formFields, setFormFields] = useState({
    class_name: '',
    class_type: '',
    start_time: '',
    class_duration: '',
    intensity_level: '',
    location: '',
    registered_number: 0,
    registered_max: 0
  });

  const navigate = useNavigate()

  const redirectToClasses = () => {
    navigate('/classes')
  }

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(formFields)

    axiosWithAuth()
      .post('https://anywhere-fitness-01.herokuapp.com/api/classes', formFields)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        redirectToClasses()
      })
  }

  return (
    <>
      <SignupWrapper>
        <h1> Add New Class! </h1>

        <Form>
          <Input
            value={formFields.class_name}
            onChange={handleInputChange}
            type="text"
            name="class_name"
            placeholder="Class Name"
          />
          <Input
            value={formFields.class_type}
            onChange={handleInputChange}
            type="text"
            name="class_type"
            placeholder="Type"
          />
          <Input
            value={formFields.start_time}
            onChange={handleInputChange}
            type="text"
            name="start_time"
            placeholder="Start Time"
          />
          <Input
            value={formFields.class_duration}
            onChange={handleInputChange}
            type="text"
            name="class_duration"
            placeholder="Duration"
          />
          <Input
            value={formFields.intensity_level}
            onChange={handleInputChange}
            type="text"
            name="intensity_level"
            placeholder="Class Intensity"
          />
          <Input
            value={formFields.location}
            onChange={handleInputChange}
            type="text"
            name="location"
            placeholder="Location"
          />
          <Input
            value={formFields.registered_number}
            onChange={handleInputChange}
            type="text"
            name="registered_number"
            placeholder="Registered Currently"
          />
          <Input
            value={formFields.registered_max}
            onChange={handleInputChange}
            type="text"
            name="registered_max"
            placeholder="Maximum Attendees"
          />
          <Button onClick={handleClick}>Create Class</Button>
        </Form>
      </SignupWrapper>
    </>
  )
}

// class_duration: "Test Duration"
// class_name: "Test Class"
// class_type: "Test Type"
// intensity_level: "Test Intensity"
// location: "Test Location"
// registered_max: "30"
// registered_number: "15"
// start_time: "Test Time"

export default AddClass;