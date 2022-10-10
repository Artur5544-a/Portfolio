import React from 'react'
import bootstrap from '../../../img/AboutImg/bootstrap.svg'
import es6 from '../../../img/AboutImg/es6.svg'
import git from '../../../img/AboutImg/git.svg'
import github from '../../../img/AboutImg/github.svg'
import photoshop from '../../../img/AboutImg/photoshop.svg'
import npm from '../../../img/AboutImg/npm.svg'
export const OtherSkills = () => {
    return (
        <div className='other-skulls'>
            <h1>Other skills</h1>
            <ul>
                <li>
                    <div className='skills'>
                        <p><img src={bootstrap} />Bootstrap</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={es6} />Es5/Es6</p>
                    </div>
                </li>
                
                <li>
                    <div className='skills'>
                        <p><img src={git} />Git</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={github} />Github</p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={npm} />Npm </p>
                    </div>
                </li>
                <li>
                    <div className='skills'>
                        <p><img src={photoshop} />Photoshop</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
