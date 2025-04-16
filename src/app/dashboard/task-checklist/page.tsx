import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const page = () => {
  return (
    <Box display='flex' pt='110px' height='100vh'>
      <Box width={200} bgcolor='pink' />
      <Box display='flex' flexDirection='column' flexGrow={1} pt={4}>
        <Box display='flex' flexDirection='column' alignItems='center' gap={1} bgcolor='#fff' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' mx={4} px={10}>
          <Typography variant='body1' py={2}>50%</Typography>
          <Box height={20} width='100%' bgcolor='pink' borderRadius={8}></Box>
          <Typography variant='body2' py={1}>You are 50% finished with your task.</Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap={6} bgcolor='#fff' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' m={4} p={4}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='space-between' sx={{ borderBottom: '1px solid #ddd' }}>
              <Typography variant='body1' width={200}>Status</Typography>
              <Typography variant='body1' width={400} textAlign='center'>Description</Typography>
              <Typography variant='body1' width={200} textAlign='center'>Deadline</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' py={1} sx={{ borderBottom: '1px solid #ddd' }}>
              <Typography variant='body1' width={200}>Not Started</Typography>
              <Typography variant='body1' width={400} textAlign='center'>This is the first description.</Typography>
              <Typography variant='body1' width={200} textAlign='center'>01.01.2025</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' py={1} sx={{ borderBottom: '1px solid #ddd' }}>
              <Typography variant='body1' width={200}>In Progress</Typography>
              <Typography variant='body1' width={400} textAlign='center'>This is the second description.</Typography>
              <Typography variant='body1' width={200} textAlign='center'>01.01.2025</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' py={1} sx={{ borderBottom: '1px solid #ddd' }}>
              <Typography variant='body1' width={200}>Completed</Typography>
              <Typography variant='body1' width={400} textAlign='center'>This is the third description.</Typography>
              <Typography variant='body1' width={200} textAlign='center'>01.01.2025</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default page