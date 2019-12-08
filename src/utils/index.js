import axios from 'axios'
import React from 'react'


export const getPatientData = async (patientID)=>{
    const response = await axios.get(
      `  https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/${patientID}`
    )
    .catch(err=>console.log(err.response.statusText))

    const name = response.data.name[0].text
    const gender = response.data.gender
    const dob = response.data.birthDate

    const result = { name,gender,dob}

  return result
}

export  const getPatientConditions = async (id,resourceType)=>{
    const response = await axios.get(` https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/${resourceType}?patient=${id}&status=active`)
    console.log(response)

    const conditions = response.data.entry.map((condition,i)=>{
      const results = {
        name:condition.resource.code.text,
        dateRecorded:condition.resource.dateRecorded || 'N/A',
        link:<a target='blank' href={`https://www.ncbi.nlm.nih.gov/pubmed/?term=${condition.resource.code.text}`}>{condition.resource.code.text}</a>
        
        }
        return results  
  })
  return conditions
   
  }