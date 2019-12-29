import React from 'react'
import './App.css'

const NoMatch = () => {
    return (
        <div className="container">
        <div className="w-100 text-center mt-5">
            <div className="title-flex mr-auto bounceInUp animated">
                <h1 className="m-2">SUSU AND SONS</h1>
                <h4 className="noMatchText text-dark">שגיאה 404</h4>
                <h2 className="noMatchText text-dark">הדף שניסית להגיע אליו עדיין לא קיים</h2>
                <h2 style={{fontSize: '85px'}}>😢</h2>
            </div>
        </div>
        </div>
    )
}

export default NoMatch
