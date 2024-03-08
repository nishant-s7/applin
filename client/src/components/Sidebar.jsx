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


export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
          <FaHamburger />
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
            <DrawerHeader>Hello User!</DrawerHeader>
  
            <DrawerBody>
                <div className='flex w-100 flex-col justify-center items-center font-3xl'>
                <Link >
                Login
              </Link>
              <Link >
                SignUp
              </Link>
                </div>
             
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }