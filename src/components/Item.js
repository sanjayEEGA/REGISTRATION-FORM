import React from 'react';
import Card from '@mui/material/Card';
function Item(selectedMode) {
    return (
       
        <Card sx={{ width: 345 }}>
        <div style={{margin:'20px'}}>
     <h3 style={{textAlign:'center'}}>REGISTRATION FORM </h3>
      <p>First Name : {selectedMode.fname} </p>
     
       
       <p> Last Name :  {selectedMode.lname}</p>
       
       <p>Email ID :  {selectedMode.Email}</p>
       <p>Date Of Birth : {selectedMode.DOB}</p>
     <p>Gender: {selectedMode.gender}  </p>
     <p>Phone Number : {selectedMode.Number}</p>
     <p>{selectedMode.TandC}</p>

     
     <br/>
    
       
     </div>
   </Card>
    );
}

export default Item;