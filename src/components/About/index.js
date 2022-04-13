import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPython,
    faCss3,
    faGitAlt,
    faGithub,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(()=> {
        return setTimeout(()=> {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


    return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I'm an ambitious full-stack or front-end developer looking for a role 
                offering the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quiet, curious, and tenacious. I love to learn and 
                enjoy any chance I get to mess with a new technology. 
            </p>
            <p>
                I'm a huge nerd! I love to read, play video games, and explore
                the world with my kids. When I'm not doing that, I'm baking or watching
                trash TV. 
            </p>
        </div>

        <div className='stage-cube-cont'>
        <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#28a4d9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGithub} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <Loader type="pacman" />
    </div>
  )
}

export default About