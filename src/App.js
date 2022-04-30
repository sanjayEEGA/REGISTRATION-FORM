
import './App.css';
import MuiPhoneNumber from 'material-ui-phone-number';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Item from './components/Item';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [DateOfBirth,setDateOfBirth]=useState('');

  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [TandC, setTandC] = useState('');



 
    const [state, setState] = useState({
        fname: "",
        lname: "",
        Email:"",
        DOB:"",
        Gender:"",
        tANDc:"",
        
      })
    
     
      const handleSubmit = (event) => {
        
        setState({
          fname: firstName,
          lname: lastName,
          Email:EmailId,
          DOB:DateOfBirth,
          Gender:gender,
          PhoneNumber:phone.number ,
          tANDc:TandC,
          
          })

      };
  
      function handleOnChange (value) {
        setPhone({
           number: value
        });
     }
  return (
    <div className="App">
     
       <div className="form-container">
          <Card sx={{ maxWidth: 345 }}>
          <div className="main-container" style={{margin:'15px'}}>
          <h3 style={{textAlign:'center'}}>REGISTRATION FORM</h3>
          <div className='hero-text'>
              <label className='side-heading' style={{fontSize:'20px',fontWeight:'400'}}> First&nbsp;Name&nbsp;: 
                    <TextField
                    
                    size="small"
                    
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                        
                      style={{width:'100%'}}
                        variant="standard"
                      />
                      </label>
            
            <label className='side-heading'  style={{ fontSize:'20px',fontWeight:'400'}}> Last&nbsp;Name&nbsp;:
                    <TextField
                    
                      value={lastName}
                      style={{width:'100%'}}
                      size="small"
                      onChange={e => setLastName(e.target.value)}
                      variant="standard"
                    /> </label>
          <label className='side-heading'  style={{ fontSize:'20px',fontWeight:'400'}}>
                  Email&nbsp;Id&nbsp;: 
                    <TextField
                      
                    type="mail"
                      value={EmailId}
                      style={{width:'100%'}}
                      size="small"
                      onChange={e => setEmailId(e.target.value)}
                      variant="standard"
                    /> </label>
            <label className='side-heading'  style={{fontSize:'20px',fontWeight:'400'}}> Date Of Birth : 
            
          
              <TextField 
              variant="standard"
                value={DateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
              
                size="small"
                type="date"
                
                
            style={{border:'0px solid transparent',outline:'none'}}
              />
             
            </label>

        <FormControl>
          <FormLabel >Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
                <FormControlLabel  control={<Radio 
                
                value="Female"
                checked={gender === 'Female'}
                onChange={e => setGender(e.target.value)}
                />} label="Female" />
                <FormControlLabel  control={<Radio 
                
                value="Male"
                checked={gender === 'Male'}
                onChange={e => setGender(e.target.value)}
                />} label="Male" />
                <FormControlLabel  control={<Radio
                
                value="Other"
                checked={gender === 'Other'}
                onChange={e => setGender(e.target.value)}

                />} label="Other" />
          
          </RadioGroup>
        </FormControl>

              <label className='side-heading'  style={{fontSize:'20px',fontWeight:'400'}}> Phone&nbsp;No&nbsp;: 
               <MuiPhoneNumber defaultCountry={'in'}  style={{width:'100%'}}
                     
                     onChange={handleOnChange} 
                     />
                     
             
                         
             </label>
          <FormControlLabel  control={ <Checkbox   
          value="Agree Terms and Conditions "
            checked={TandC === 'Agree Terms and Conditions '}
            onChange={e => setTandC(e.target.value)} />} label="Agree Terms and Conditions" />
           
        
          </div>
          
          </div>
          <CardActions style={{justifyContent: 'center'}}>
          <Button variant="contained" className='button-signIn' size='large' style={{ justifySelf:'center'}}  onClick={handleSubmit} >Sign in</Button>
        
          </CardActions>
        </Card>
      </div>
    
              <div className="item-container">
              <Item fname={state.fname} lname={state.lname} Email={state.Email} DOB={state.DOB} gender={ state.Gender} Number={state.PhoneNumber} TandC={state.tANDc}></Item>
             
             </div>
    </div>
  );
}

export default App;
