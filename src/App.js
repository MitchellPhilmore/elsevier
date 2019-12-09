import React, { Component } from 'react'
import {getPatientData,getPatientConditions} from './utils'
import { PatientTable} from './PatientTable'
import Loader from 'react-loader-spinner'

export default class App extends Component {
   componentWillMount(){
    this.state = {
      conditions: [],
      patient:{},
      loading:true

    }
    
 getPatientData(`1316024
 `).then(data => this.setState({patient:data}))    
 getPatientConditions('1316024','Condition').then(data => this.setState({conditions:data,loading:false},()=>console.log('Done')) )
   }

  render() {
    console.log(this.state.conditions)
    
    return (
    <>
    {this.state.conditions.length === 0? 
    <div style={{
      position: 'absolute',
      top: '40%',
      left: '40%'}}>
        <Loader
         type="Circles"
         color="#2f4c6e"
         height={200}
         width={200}
         timeout={10000} //3 secs

      />
      </div>
      
       :
      
      <PatientTable 
      name={` Name: ${this.state.patient.name}`}
      gender={`Gender: ${this.state.patient.gender}`}
      dob={`DOB: ${this.state.patient.dob}`}
      conditions={this.state.conditions}
      
      
      />
     
      
 }
     
     </>
     )
    
  }
}
