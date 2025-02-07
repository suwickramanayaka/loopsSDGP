import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>Hire Vision</span>
            <PersonPinIcon className='personlogo'/>
        </div>
        <div className="navBarCenter">
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <Stack direction="row" spacing={2}>
                    <Button className='bt1' variant='PostaJob' href='#contained-buttons'>+ Post a job</Button>
                    <Button className='bt2' variant='Candidate' href='#contained-buttons'>Candidate Sign-in</Button>
                    <Button className='bt3' variant='Employer' href='#contained-buttons'>Employer Sign-in</Button>
                </Stack>
            </div>
        </div>
    </div>
  )
}
