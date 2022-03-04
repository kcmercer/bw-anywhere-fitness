import React, {useState} from 'react';

import EditClass from './editClass';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { ClassWrapper, ClassH2, ClassH4, ClassButton } from './classElements';

const Class = (props) => {
  const { course } = props
  const { class_id, class_name, class_type, class_duration, start_time, intensity_level, location, registered_max, registered_number } = course
  const [ editing, setEditing ] = useState(false)

  function handleClick(e) {
    e.preventDefault();
    console.log('Signed up for', {class_name})
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true)
  }

  // const handleDelete = (id) => {
  //   axiosWithAuth()
  //     .delete(`https://anywhere-fitness-01.herokuapp.com/api/classes/${id}`)
  //     .then(resp => {
  //       console.log(resp)
  //     })
  // }

 if (!editing) {
  return (
    <>
      <ClassWrapper>
        <ClassH2>{class_name}</ClassH2>
        <ClassH4>Type: {class_type}</ClassH4>
        <ClassH4>Duration: {class_duration}</ClassH4>
        <ClassH4>Start Time: {start_time}</ClassH4>
        <ClassH4>Intensity: {intensity_level}</ClassH4>
        <ClassH4>Location: {location}</ClassH4>
        <ClassH4>Attendees: {registered_number}</ClassH4>
        <ClassH4>Max Attendees: {registered_max}</ClassH4>
        <ClassButton onClick={handleClick}> Sign up! </ClassButton>
        <ClassButton onClick={handleEdit}> Edit! </ClassButton>
        {/* <ClassButton onClick={handleDelete(class_id)}> Delete! </ClassButton> */}
      </ClassWrapper>
    </>
  ) } else {
    return (<EditClass editId={class_id} course={course} />)
  }
}

export default Class;