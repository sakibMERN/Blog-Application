
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {

     //Global state
     const isLogin = useSelector(state => state.isLogin);
     console.log(isLogin);

     //state
     const [value, setValue] = useState();

     return (
          <div>
               <>
                    <AppBar position='sticky'>
                         <Toolbar>
                              <Typography variant='h4'>My Blog App</Typography>

                              {isLogin && (
                                        <Box display={"flex"} marginLeft={"auto"} marginRight={"auto"} >

                                             <Tabs textColor='inherit' value={ value } onChange={(e, value)=> setValue(value)} >
                              
                                                  <Tab label= "Blogs" LinkComponent={Link} to= "/blogs" />
                              
                                                  <Tab label= "My Blogs" LinkComponent={Link} to= "/my-blogs" />
                                                                      
                                             </Tabs>
                                        </Box>
                              )}

                              <Box display={"flex"} marginLeft={"auto"}>
                                   {!isLogin && (
                                        <>
                                             <Button sx={{margin: 1, color: "white"}} LinkComponent={ Link } to="/login" >Login</Button>
                                             <Button sx={{margin: 1, color: "white"}} LinkComponent={ Link } to="/register" >Register</Button>
                                        </>
                                   )}
                                   {isLogin && (
                                        <>
                                        <Button sx={{margin: 1, color: "white"}}>Logout</Button>
                                        </>
                                   )}
                              </Box>
                         </Toolbar>
                    </AppBar>
               </>      
          </div>
     );
};

export default Header;