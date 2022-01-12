import React from 'react'
import Card3Img from './Card3Img'
import CardMessage from './CardMessage'

function AboutCard3() {
    return (
        <div className="card card-3">
            <i className="icons far fa-car-building"></i> 
            <Card3Img />
            <h3 className="card-title">Office Plants</h3>
            <CardMessage />
        </div>
    )
}

export default AboutCard3
