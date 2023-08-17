import { Box, Typography, TextField, Button } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
     //Navigation
     const navigate = useNavigate();

     //state
     const [input, setInput] = useState({
          username:"",
          email:"",
          password:"",
     });

     // handel input change
     // const handelChange = (e) =>{
     //      setInput((prevState)=>({
     //           ...prevState,
     //           [e.target.name]: e.target.value,
     //      }));
     // };

     const handeleSubmit = async (e) =>{
          e.preventDefault();
          try {
               console.log(28);
               console.log({username:input.name});
               const data =await axios.post('http://localhost:8080/api/v1/user/register',{username:input.name, email:input.email, password:input.password});
               console.log(30);
               if(data.success){
                    alert ('User register successfully')
                    navigate("/login")
               }
          
          } catch (error) {
               console.log(error);
          }

     }

     return (
          <>
               <form onSubmit={handeleSubmit}>
                    <Box 
                         maxWidth={450} 
                         display="flex" 
                         flexDirection={"column"} 
                         alignItems={"center"} 
                         justifyContent={"center"} 
                         margin="auto" 
                         marginTop="5"
                         boxShadow="10px 10px 20px #ccc"
                         padding={3}
                         borderRadius={5}
                         >
                         <Typography variant='h4' padding={3} textAlign={"center"} textTransform={"uppercase"} >
                              Register
                         </Typography>

                         <TextField 
                              placeholder='name' 
                              name='name' 
                              type='text'
                              value={input.name}
                              margin='dense'
                              fullWidth
                              required
                              
                         />
                         <TextField 
                              placeholder='email' 
                              name='email' 
                              type='email'
                              value={input.email}
                              margin='dense'
                              fullWidth
                              required
                              
                         />
                         <TextField 
                              placeholder='password' 
                              name='password'
                              type='password'
                              value={input.password} 
                              margin='dense'
                              fullWidth
                              required
                              
                         />
                         
                         <Button type='submit' variant='contained' color='primary' sx={{borderRadius: 3, marginTop: 2}}>
                              Submit
                         </Button>
                         <Box sx={{marginTop: 1,}}>
                         <h4>
                              Already Registered ?
                              <Button onClick={()=> navigate("/login")} color='warning'  sx={{borderRadius: 3,}}>
                                   Please Login
                              </Button>
                         </h4>
                         </Box>
                         
                    </Box>
               </form>
          </>
     );
};

export default Register;