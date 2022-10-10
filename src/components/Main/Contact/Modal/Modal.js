import React from 'react'
import './Modal.css'
import tick from '../../../../img/tick.png'
export const Modal = (props) => {
    const Active = () => {
        props.setActive(!props.active)
        console.log(props.active);
    }
    return (
        <div className={`modal ${props.active ? "modalopen" : ""}`}>
            {props.active ?
                <div className='popup'>
                    <img src={tick} />
                    <h2>Thank you!</h2>
                    {props.active ? <h3> {props.active}</h3> : null}
                    <button onClick={Active} >Ok</button>
                </div>
                : null}
        </div>
    )

}