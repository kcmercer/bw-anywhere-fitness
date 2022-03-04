import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

//Styling Imports
import {
  EditWrapper,
  Form,
  Input,
  Button,
} from "./editClassElements";

const EditClass = (props) => {
  console.log(props);

  const { course } = props
  const { class_name, class_type, class_duration, start_time, intensity_level, location, registered_max, registered_number } = course

  const [formFields, setFormFields] = useState({
    class_name: class_name,
    class_type: class_type,
    start_time: start_time,
    class_duration: class_duration,
    intensity_level: intensity_level,
    location: location,
    registered_number: registered_number,
    registered_max: registered_max
  });

  console.log(formFields)

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

    axiosWithAuth()
      .put(`https://anywhere-fitness-01.herokuapp.com/api/classes/${props.class_id}`, formFields)
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

  function cancelEdit(e) {
  }

  return (
    <>
      <EditWrapper>
        <h1>Edit {class_name} </h1>

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
          <Button onClick={handleClick}>Confirm Edit</Button>
          <Button onClick={cancelEdit}>Cancel Edit</Button>
        </Form>
      </EditWrapper>
    </>
  )
}

export default EditClass;