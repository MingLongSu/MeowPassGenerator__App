import React from 'react'

import './passgeninterface.css'

export default function PassGenInterface() {
    return (
        <div className='PassGenInterface'>
            <div className='PassGenInterface__display-1-container'>
                <div className='display-1-container__display-1-title-container'>
                    <div className='display-1-title-container__title'>
                        Random
                        <br></br>
                        Password
                        <br></br>
                        Generator
                    </div>
                </div>
                <div className='display-1-title-container__options-container'>
                    { 
                        // put input boxes here for the options
                    }
                </div>
            </div>
            <div className='PassGenInterface__display-2-container'>
                <div className='display-2-container__title'>
                    Your new password:
                </div>
                <input className='display-2-container__new-password-output'></input>
            </div>
        </div>
    )
}
