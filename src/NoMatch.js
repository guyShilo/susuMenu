import React from 'react'
import './App.css'

const NoMatch = () => {
    return (
        <div className="container">
        <div className="w-100 text-center mt-5">
        <h1 className="m-2 text-light noMatchText">SUSU AND SONS</h1>
            <div className="title-flex mr-auto bounceInUp animated">
                <h2 className="noMatchText text-warning ">שגיאה 404</h2>
                <h4 className="noMatchText text-warning ">הדף שניסית להגיע אליו עדיין לא קיים</h4>
                <h3 className="text-danger ">או שאין לך הרשאות...</h3>
                <h4 style={{fontSize: '85px'}}>😢</h4>
            </div>
        </div>
        </div>
    )
}

export default NoMatch
