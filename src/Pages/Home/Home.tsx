import React, { useEffect } from 'react'
// import InfoCard from '../../InfoCard'
import { Card, Container, Divider, Typography } from '@mui/material'
import { Rings } from 'react-loader-spinner'

import { motion } from 'framer-motion'
import moment from 'moment';


const profile = {
    "gender": "male",
    "name": {
        "title": "Mr",
        "first": "Taha",
        "last": "Solstrand"
    },
    "location": {
        "street": {
            "number": 5895,
            "name": "Martin Borrebekkens vei"
        },
        "city": "Odda",
        "state": "Aust-Agder",
        "country": "Norway",
        "postcode": "3750",
        "coordinates": {
            "latitude": "43.3622",
            "longitude": "-115.7238"
        },
        "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
    },
    "email": "taha.solstrand@example.com",
    "login": {
        "uuid": "dc498911-9c87-465a-89f0-309ff62c11ea",
        "username": "whitebird316",
        "password": "mandy",
        "salt": "LWFBzuPp",
        "md5": "9f552e55171856352d1f40757e3a27a1",
        "sha1": "68a7b9bb8e6bdeb7117148159f19df4ae2fd8ddb",
        "sha256": "e20be2fd7109ed01fedf1612d61c2eb6e8e35fc70315cc28e73bc9247b28e9b0"
    },
    "dob": {
        "date": "1944-12-01T11:55:48.967Z",
        "age": 78
    },
    "registered": {
        "date": "2014-07-29T16:44:56.819Z",
        "age": 9
    },
    "phone": "84170186",
    "cell": "48280183",
    "id": {
        "name": "FN",
        "value": "01124449185"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
    },
    "nat": "NO"
}

const profileData = {
    "results": [
        profile
    ],
    "info": {
        "seed": "abcd",
        "results": 1,
        "page": 12,
        "version": "1.4"
    }
}
type ProfileDataType = typeof profileData
type ProfileType = {
    profile: typeof profile
}
function Home() {
    const [ProfileData, setProfileData] = React.useState<ProfileDataType | null>(null)
    async function GetData() {
        try {
            const response = await fetch("https://randomuser.me/api/?page=30&results=3&seed=abc")
            const result = await response.json();
            console.log(result);
            
            setProfileData(result)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: "99vh"
            }}>
                <Container sx={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        minHeight: "99vh"
                    }
                }>

                {
                    !!ProfileData ? <>
                        {
                            ProfileData.results.map((profile, index) => (
                                <ProfileCard key={index} profile={profile} />
                            ))
                        }
                    </> :
                        <LoaderContainer />
                }
                                </Container>

            </div>
        </>
    )
}


const ProfileCard = ({ profile }: ProfileType) => {
    useEffect(() => {
        console.log(profile)
    })
    return (
        <>
            <motion.div
                initial={{
                    right: -1000,
                    scale: 0.5
                }}
                animate={{
                    right: 0,
                    scale: 1
                }}
                transition={{
                    duration: 0.5
                }}
                exit={{
                    right: 2000,
                    scale: 0.5
                }}
                style={{
                    width: "100%",
                }}
            >
                <Card style={{
                    minWidth: "80%",
                    maxWidth: "99%",
                    width: "100%",
                    minHeight: "85vh",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    margin:"20px 0",
                    padding:"20px 10px"
                }}>
                    <Typography sx={{
                        display: {
                            xs: "flex",
                            md: "grid"
                        },
                        gridTemplateColumns: "1fr 1fr",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        minHeight: "85vh"
                    }}>
                        <Typography component={'div'} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "100%",
                        }}>
                            <img src={
                                profile.picture.large
                            } style={{
                                maxWidth: "300px"
                            }} alt="" />
                            {
                                window.innerWidth > 600 ? <Typography variant='h6' sx={{

                                }}>

                                    <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15085.382452587406!2d${profile.location.coordinates.longitude}!3d${profile.location.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700616747431!5m2!1sen!2sin`} width="300" height="250" loading="lazy" style={{
                                        margin:"20px"
                                    }}></iframe>
                                </Typography> : null
                            }
                        </Typography>
                        <Typography component={'div'} sx={{
                            padding: "20px",
                        }}>
                            <Typography variant='h5'>
                                {profile.name.title}. {profile.name.first} {profile.name.last} ({profile.login.username})
                            </Typography>
                            <Divider />
                            <Typography component={'p'} sx={{
                                margin: "20px 0"
                            }}>
                                Gender: {profile.gender}
                            </Typography>
                            <Divider />

                            <Typography variant='h6' sx={{
                                margin: "20px 0"
                            }}>
                                Phone: {profile.email}
                            </Typography>
                            <Divider />

                            <Typography variant='h6' sx={{
                                margin: "20px 0"
                            }}>
                                Phone: {profile.phone}
                            </Typography>
                            <Divider />

                            <Typography variant='h6' sx={{
                                margin: "20px 0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <span>
                                    Birthday: {new Date(profile.dob.date).toUTCString().substring(0, 16)}

                                </span>
                                <span>
                                    Age: {moment(new Date(profile.dob.date).toUTCString()).fromNow().substring(0, moment(new Date(profile.dob.date).toUTCString()).fromNow().length - 3)}

                                </span>
                            </Typography>
                            <Divider />

                            <p>Address:</p>
                            <Typography variant='h6' sx={{
                            }}>
                                {profile.location.street.number} {profile.location.street.name} {profile.location.city} {profile.location.state} {profile.location.country} {profile.location.postcode}
                            </Typography>
                            <Divider />

                            <Typography variant='h6' sx={{
                                margin: "20px 0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <span>
                                    Registered on: {new Date(profile.registered.date).toUTCString().substring(0, 16)}
                                </span>
                                <span>
                                    {moment(new Date(profile.registered.date).toUTCString()).fromNow()}
                                </span>
                            </Typography>
                        </Typography>
                    </Typography>
                </Card>
                {/* {JSON.stringify(profile)} */}

            </motion.div>
        </>
    )

}


const LoaderContainer = () => {

    return (
        <>
            <motion.div
                initial={{
                    left: -1000,
                    scale: 0.5
                }}
                animate={{
                    left: 0,
                    scale: 1
                }}
                transition={{
                    duration: 0.5
                }}
                exit={{
                    left: 2000,
                    scale: 0.5
                }}
            >

                <Card style={{
                    minWidth: "80%",
                    maxWidth: "99%",
                    width: "100%",
                    minHeight: "85vh",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Rings
                        height="500px"
                        width="500px"
                        color="#4fa94d"
                        radius="6"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="rings-loading"
                    />
                </Card>
            </motion.div>
        </>
    )

}
export default Home