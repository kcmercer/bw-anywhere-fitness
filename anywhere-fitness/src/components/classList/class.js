import React from 'react';

import { ClassWrapper, ClassH2, ClassH4, ClassButton } from './classElements';

const Class = (props) => {
  const { course } = props
  const { class_name, class_type, class_duration, start_time, intensity_level, location, registered_max, registered_number } = course

  function handleClick(e) {
    e.preventDefault();

    console.log('Signed up for', {class_name})
  }

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
      </ClassWrapper>
    </>
  )
}

export default Class;