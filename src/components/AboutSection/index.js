import React from 'react'
import Highlight from 'react-highlight'
import AboutResume from '../AboutResume'
import './AboutSection.css'
import './theme.css'


const AboutSection = () => (

  <div className="separation">
    <section id="about">
      <h3>About me</h3>
      <h4>in code</h4>

      <Highlight className='javascript'>
{`
import WebDeveloper from './FullSail.edu'
import GraghicDesigner from 'Style.scss'

class GreatDeveloper extends Person {
  constructor(fullname, age, hobbies, tools){
    this.name = 'Carlos Junod'
    this.age = 32
    this.hobbies = ['Good food', 'Traveling'
                    'Netflix', 'Video Games']
    this.tools = {
      coding: [
        'JavaScript', 'React.js','PHP',
        'Symfony', 'Wordpress', 'HTML5/CSS3'
      ],
      design: [
        'Illustrator', 'Photoshop',
        'Sketch', 'UX/UI'
      ]
    }
  }
}

// Made with ❤️ using React.js 

`}
      </Highlight>
    </section>
    <AboutResume/>
  </div>

)

export default AboutSection