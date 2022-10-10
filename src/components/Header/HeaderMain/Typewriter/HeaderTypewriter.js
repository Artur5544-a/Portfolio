import Typewriter from "typewriter-effect";
import React from 'react'
import './Typewriter.css'
export const HeaderType = () => {
    return (
        <>
            <Typewriter
                options={{ autoStart: true, loop: true, }}
                onInit={(typewriter) => {
                    typewriter
                        .start()
                    .typeString("Front End Developmnt.").pauseFor(3000).deleteAll()
                    .typeString("HTML/CSS.").pauseFor(3000).deleteAll()
                    .typeString("Java Script.").pauseFor(3000).deleteAll()
                    .typeString("ReactJS").pauseFor(3000).deleteAll()
                    .typeString("JSX").pauseFor(3000).deleteAll()
                    .typeString("ES5/ES6").pauseFor(3000).deleteAll()
                    .typeString("NPM/Webpack").pauseFor(3000)
                    .start()
                }}
            />
        </>
    )
}
