import './index.scss'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import LogoS from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['m', 'a', 'n', 'd', 'a']
  const jobArray = ['f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o','p','e','r']

  useEffect(()=> {
    return setTimeout(()=> {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoS} alt="logo" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            </h1>
            <h2>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
            </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
  )
}

export default Home