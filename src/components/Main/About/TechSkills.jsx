import React from 'react'
import html from '../../../img/AboutImg/html.svg'
import css from '../../../img/AboutImg/css.svg'
import sass from '../../../img/AboutImg/sass.svg'
import js from '../../../img/AboutImg/js.svg'
import react from '../../../img/AboutImg/react.svg'
import redux from '../../../img/AboutImg/redux.svg'
export const TechSkills = () => {
    return (
        <div className='tech-skills'>
            <h1>Tech Skills</h1>
            <ul>
                <li>
                    <div className='skills'>
                        <p><img src={html} />Html</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={css} />Css</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={sass} />Sass</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={js} />Js</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={react} />React</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={redux} />Redux</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
