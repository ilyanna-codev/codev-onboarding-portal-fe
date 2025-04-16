import React from 'react'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <Box display='flex' flexDirection='column' width='55vh' justifySelf='center'>
            <Box display='flex' justifyContent='center' py={6}>
                <Image 
                    src='/images/codev-logo.png' 
                    alt='codev-logo'
                    width={200}
                    height={50} 
                />
            </Box>
            <Box display='flex' flexDirection='column' gap={2} p={4} borderRadius={4} bgcolor='#fff' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'>
              <Typography variant='h4' textAlign='center' pb={2}>Onboarding Portal</Typography>
              <TextField name='username' type='email' placeholder='Username' />
              <TextField name='password' type='password' placeholder='Password' />
              <Button variant='contained' sx={{ borderRadius: 2 }}>Log In</Button>
              
              {true && <Alert severity='error' sx={{ my: 2 }}>Error: Invalid login message</Alert>}
            </Box>
        </Box>
    </>
  )
}

export default page