import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Class from './class';
import { ListWrapper, ListButton } from './indexElements';

const initClasses = [{
  name: 'classname',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
},
{
  name: 'classname2',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
},{
  name: 'classname3',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
},{
  name: 'classname4',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
},{
  name: 'classname5',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
},{
  name: 'classname6',
  type: 'type',
  startTime: 'startTime',
  duration: 'duration',
  intensityLevel: 'intensityLevel',
  location: 'location',
  attendees: 'attendees',
  max: 'max'
}]

const ClassList = () => {
  const [ classes, setClasses ] = useState([])

  const navigate = useNavigate()

  const redirectToAddClass = () => {
    navigate('/addclass')
  }

  useEffect(() => {

    axiosWithAuth()
      .get('https://anywhere-fitness-01.herokuapp.com/api/classes')
      .then(resp => {
        console.log(resp)

        setClasses(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleClick = (e) => {
    e.preventDefault();

    redirectToAddClass()
  }

  return (
    <>
    <h1> Start your fitness journey off right!</h1>
      <ListWrapper>

          {classes.map(course => {
            return <Class key={course.name} course={course} />
            })}

      </ListWrapper>
      
      <ListButton onClick={handleClick}>Add a class!</ListButton>
    </>
  )
}

export default ClassList;