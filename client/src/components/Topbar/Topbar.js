import React from 'react'

import './topbar.css'

export default function Topbar() {
    return (
        <div className='Topbar'>
            <div className='Topbar__meow-apps-logo-container'></div>
            <div className='Topbar__meow-apps-title-container'>
                <span className='meow-apps-title-container__title'>
                    Meow Apps
                </span>
                <div className='meow-apps-title-container__underline'></div>
            </div>
        </div>
    )
}
