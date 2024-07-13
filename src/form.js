import React, { Component } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import "./form.css";
import * as yup from "yup";
import "./validationsForm.js";
const department = () => [
    {label : 'CSE'},
    {label : 'ECE'},
    {label : 'EEE'},
    {label : 'IT'}

];
const form = props => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
};

class Form extends Component{
    
      render(){
        
      
        return (
          
       
           <div className='form' >
            <center>

                <div>
                    <h1>Material UI</h1>
                    
                    <div className="text_area">      
            

                <TextField
              
              variant="outlined"
                required
                fullWidth
                id = "name"
                label = "Name"
              
              
                />
            </div>
            <div className="text_area">
            <Autocomplete disablePortal 
            id = "department"
            
              
            options = {department()}
            sx = {{fontSize : 50}}
            renderInput = {(params) =>
                <TextField {...params} label="Department" />}
                
             /> 
             </div>  
           
            
            <div className="text_area">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
              />
            </div>
            <div className="text_area">
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                
              />
            </div>
            <div className="text_area">
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
               
               
              />
            </div> 
            <div className="text_area">
                <FormGroup>
             <FormControlLabel 
                        control={<Checkbox defaultChecked  
                        size="small" 
                        color="success" />} 
                        label="I agree to the Terms and Conditions"
                    /> 
                </FormGroup>
             </div>
             <div className='text_area'>
             <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Register
          </Button> 
          </div>
            </div>
            </center>
            </div>
        )
       
    
  
}
}

export default Form;