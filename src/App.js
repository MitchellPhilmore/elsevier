import React, { useEffect,useState } from 'react'
import {getPatientData,getPatientConditions,showLoader} from './utils'
import { PatientTable} from './PatientTable'
import './App.css'

 const App = () =>{
    const [conditions,setConditions] = useState([])
    const [patient,setPatient] = useState({});
  // ** Before the component renders make API request to get all the relevant patient data and initialize state
    useEffect(async()=>{
      try{
        setPatient(await getPatientData(`1316024`))  
        setConditions(await getPatientConditions(`1316024`,`Condition`))
        
     }catch(error){ throw error}
    },[])
    const {name,gender,dob} = patient
    return (
      // **  If the conditions array is empty display loader otherwise show the patient table
    <>
      { 
        conditions.length === 0 ? showLoader() :
        
        <PatientTable 
        name={` Name: ${name}`}
        gender={`Gender: ${gender}`}
        dob={`DOB: ${dob}`}
        conditions={conditions} />

      }
   </>
   )}

  export default App