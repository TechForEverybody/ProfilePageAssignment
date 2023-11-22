import { Button, Card, Typography } from '@mui/material'
import React, { useState } from 'react'


function InfoCard() {
    const [isCloses, setIsCloses] = useState(false)
    if (isCloses)
        return <></>
    else
        return (
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "#000000a1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Card sx={{
                    minWidth: "300px",
                    maxWidth: "900px",
                    width: "100%",
                    minHeight: "200px",
                    padding: "20px",
                    boxShadow: "0 0 10px 5px gray",
                    borderRadius: "20px"
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        fontWeight: "bolder"
                    }} variant='h3'>
                        Clone Site for Showcase
                    </Typography>
                    <Typography sx={{
                        textAlign: "center",
                        margin: "20px"
                    }} component={'h5'}>
                        Created By: <span style={{
                            color: "red"
                        }}>Shivkumar Chauhan</span>
                    </Typography>
                    <Typography sx={{
                        display: "flex",
                        "justifyContent": "center"
                    }}>
                        <Button color={'success'} variant='outlined' sx={{
                            textTransform: "none"
                        }} onClick={()=>{
                            setIsCloses(true)
                        }}>Close Popup and See Site</Button>
                    </Typography>
                </Card>
            </div>
        )
}

export default InfoCard