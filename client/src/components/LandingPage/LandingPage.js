import React from 'react'
import PassGenInterface from '../PassGenInterface/PassGenInterface'
import Topbar from '../Topbar/Topbar'

import './landingpage.css'

export default function LandingPage() {
    return (
        <div className='LandingPage'>
            <Topbar />
            <PassGenInterface />
        </div>
    )
}
