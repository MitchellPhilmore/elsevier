import React from "react";
import MaterialDatatable from "material-datatable";
import './style.css'
import {createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles";

export const PatientTable = (props) =>{

    const columns = [
        { name: "Conditions", field: "name" },
        { name: "Date Recorded", field: "dateRecorded" },
        { name: "Pubmed journals search", field: "link" },
      ];

      const data = props.conditions.map(data => data)

      const options = {
        filterType: "dropdown",
        responsive: "scroll"
      };
     const  getMuiTheme = () => 
    createMuiTheme({
      overrides: {
        MUIDataTable:{
          root:{
           width:'200px',
           fontFamily:'Abel, sans-serif;'
         
          },
  
        },  
      }
    });
  
      return (
        <MuiThemeProvider theme={getMuiTheme()}>
        <MaterialDatatable
          title={
                  <div>
                  <img  src={`https://cdn.opstatics.com/store/20170907/assets/images/user/user-info/avatar-default.png`}/>
                  <h3>{props.name}</h3>
                  <h4>{props.gender}</h4>
                  <h4 >{props.dob}</h4>
        
                  </div>}
          data={data}
          columns={columns}
          options={options}
        />
        </MuiThemeProvider>
      );
  
}