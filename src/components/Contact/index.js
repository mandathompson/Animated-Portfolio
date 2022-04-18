import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import NetflixGalaxy from '../../assets/images/Netflix_Galaxy.png'
import MERN from '../../assets/images/image.png'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          <p>
            If you're interested in many unfinished repositories, you've come to the right place!
            Most of my day is spent working on a project I can't show you, but here are a couple
            of examples. 
          </p>
          
        </div>
        <div className="leaflet-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: '#ffd700' }} >
                  NG
                </Avatar>
              }
              title="Netflix Galaxy"
              subheader="September, 2020"
            />
            <CardMedia
              component="img"
              height="200"
              image={NetflixGalaxy}
              alt="Landing Page"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Goal Tracking app using MERN stack
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" rel='noreferrer' href='https://github.com/mandathompson/Netflix-Galaxy'>
                    <FontAwesomeIcon icon={faGithub} color="#F535AA" />
                </a>            
            </CardActions>
          </Card>
            <br/>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: '#0099ff' }} >
                  NG
                </Avatar>
              }
              title="MERN Goal Tracker"
              subheader="March, 2022"
            />
            <CardMedia
              component="img"
              height="200"
              image={MERN}
              alt="Landing Page"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Select "Try it Out" to fetch a random movie from the netflix unofficial API, and/or create an account if you'd like to post a movie review or read others' reviews.
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" rel='noreferrer' href='https://github.com/mandathompson/MERN2022'>
                    <FontAwesomeIcon icon={faGithub} color="#F535AA" />
                </a>            
            </CardActions>
          </Card>
      </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact