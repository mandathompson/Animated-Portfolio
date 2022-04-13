import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    // letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I'm an ambitious full-stack or front-end developer looking for a role 
                offering the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
                I'm quiet, curious, and tenacious. I love to learn and 
                enjoy any chance I get to mess with a new technology. 
            </p>
            <p>
                I'm a huge nerd! I love to read, play video games, and explore
                the world with my kids. When I'm not doing that, I'm baking or watching
                trash TV. 
            </p>
        </div>
    </div>
  )
}

export default About