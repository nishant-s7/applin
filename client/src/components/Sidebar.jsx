import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import React from "react"
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../helpers/baseUrl';

export function DrawerExample() {
    const isAuthenticated  = useSelector(state => state.auth.isAuthenticated);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const submitLogoutHandler = async() => {
      const result = await fetch(BASE_URL + "auth/logout", {
        headers: {
          "Content-type": "application/json",
        },
       
      });
      const res = await result.json();
      localStorage.removeItem("token");
      localStorage.removeItem("expiryDate");
      localStorage.removeItem("userId");
      window.location.href = "/";
    }
    return (
      <>
        <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
          <FaHamburger fontSize={22} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {isAuthenticated && <DrawerHeader color={'green'}  fontSize={24}>Hello User!</DrawerHeader>}
            {!isAuthenticated && <DrawerHeader color={'green'} marginTop={12} fontSize={24}>Welcome to Daily Dairy!</DrawerHeader>}
  
            <DrawerBody>
                <div className='flex gap-4 w-100 flex-col justify-center items-center'>
                  {
                    !isAuthenticated && (
                      <>
                        <Link className='px-4 py-2 text-xl border-b border-green-700' to="/login" >
                          Login
                        </Link>
                        <Link className='px-4 py-2 text-xl border-b border-green-700' to="/signup" >
                          SignUp
                        </Link>
                      </>
                    )
                  }
                {
                    isAuthenticated && (
                      <>
                        <button className='text-2xl ' onClick={submitLogoutHandler} >
                          Logout
                        </button>
                      </>
                    )
                  }
                </div>
             
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }