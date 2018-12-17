import React, {Component} from 'react'
import '../App.css'

export default class About extends Component{
  render(){
    return(
      <div>
      <h1>About</h1>
      <img className='picture' src='http://localhost:3000/danny.png' alt='danny'/>
      <p>I am a full stack web developer with a passion for solving everyday problems with intuitive solutions. With experience in Ruby on Rails, JavaScript, and React and a background in photography and music, I discovered web development through my own desire for simpler solutions to problems in my previous fields of work. I bring strong skills in team-building, design and project management that help companies improve their overall user experience.</p>
      <p>Skills: Ruby, Rails, Javascript, React, Redux, HTML, CSS, SQL, PostgreSQL, Photoshop, Illustrator, InDesign, Premiere, Final Cut Pro</p>
      </div>
    )
  }
}
