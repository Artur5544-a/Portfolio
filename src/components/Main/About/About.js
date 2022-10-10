import React from 'react'
import './About.css'
import { OtherSkills } from './OtherSkills'
import { TechSkills } from './TechSkills'
export const About = () => {
    return (
        <div className='About'>
            <div className='about-txt'>
                <h1>About Me</h1>
            </div>
            <div className='skil'>
                <div className='skil_txt'>
                    <h1>Who am I?</h1>
                    <p>I’m a frontend developer based in Yerevan, that means I write code to align boxes on the screen and make them interactive.</p><br />
                    <p>I enjoy creating interactive, good-looking things such as websites and applications, as well as I’m always learning new stuff in my spare time.</p><br />
                    <p>I develop websites with HTML,CSS,JavaScript ,React, Redux. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop</p><br />
                    <p>Also, I'm planning to extend my skill set to become a full stack developer in the near future.</p>
                </div>
                <div className='skils' >
                    <TechSkills />
                    <OtherSkills />
                </div>
            </div>


        </div>
    )
}
