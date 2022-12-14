import React, { useState } from 'react'
import './Portfolio.css'
import weather from '../../../img/portfolioImg/weather.png'
import Calculator from '../../../img/portfolioImg/Calculator.png'
import caesar from '../../../img/portfolioImg/caesar.png'
import chartjs from '../../../img/portfolioImg/Chartjs.png'
import semart from '../../../img/portfolioImg/semart.png'

export const Portfolio = () => {

    return (

        < div className='Portfolio' >
            <h1> PORTFOLIO</h1>
            <h2>From small Web Applications and UI/UX animations to React.JS, Redux Apps. Check out my latest web development portfolio projects.</h2>

            <div className='portfolio_block'>
                <div className='portfolio_item'>
                    <div className='portfolio_item_img'>
                        <a href="https://artur5544-a.github.io/WeaterApp/" target={"_blank"} ><img src={weather} /> </a>
                    </div>
                    <h3>weather  App</h3>
                </div>
                <div className='portfolio_item'>
                    <div className='portfolio_item_img'>
                        <a href="https://Artur5544-a.github.io/Caesar-Cipher/" target={"_blank"} ><img src={caesar} /> </a>
                    </div>
                    <h3>Caesar cipher</h3>
                </div>
                <div className='portfolio_item'>
                    <div className='portfolio_item_img'>
                        <a href="https://Artur5544-a.github.io/Calculator/" target={"_blank"} ><img src={Calculator} /> </a>
                    </div>
                    <h3>Calculator</h3>
                </div>
                <div className='portfolio_item'>
                    <div className='portfolio_item_img'>
                        <a href="https://Artur5544-a.github.io/ChartJs/" target={"_blank"} ><img src={chartjs} /> </a>
                    </div>
                    <h3>ChartJs</h3>
                </div>
                <div className='portfolio_item'>
                    <div className='portfolio_item_img'>
                        <a href="https://Artur5544-a.github.io/Semart-Wireframe/" target={"_blank"}><img src={semart} /></a>
                    </div>
                    <h3>Semart Wireframe</h3>
                </div>
            </div >
        </div >
    )
}
