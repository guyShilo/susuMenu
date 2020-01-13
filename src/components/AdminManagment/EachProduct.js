import React, { useState } from 'react'
import './Admin.css'
import Dish from '../Dishes/Dish'
import EachBranch from '../Branches/EachBranch'

export const EachProduct = ({ obj }) => {
    let title = obj.dishTitle || obj.branchName
    const [addClicked, setAddClicked] = useState(false)
    const floatingComponent = () => {
        if (addClicked) {
            return { display: 'block' }
        } else {
            return { display: 'none' }
        }
    }
    const exitModalButton = () => {
        setAddClicked(!addClicked)
    }

    return (
        <>
            {obj.dishTitle ? <div className="basicModal" style={floatingComponent()}>
                    <Dish dishObj={obj} key={obj._id} exitModalButton={exitModalButton} /></div> :
                    <div className="basicModal p-5 " style={floatingComponent()}>
                        <EachBranch branchObj={obj} key={obj._id} exitModalButton={exitModalButton} /></div>
                        }
            <div className="eachProduct bg-light m-auto fadeInDown delay-1s animated">
                <div className="text-center d-flex justify-content-around mt-3 row">
                    <p className="text-dark mt-3 col-sm-2">{title}</p>
                    <p className="text-dark mt-3 col-sm-1">|</p>
                    <button onClick={() => { setAddClicked(!addClicked) }}
                        className="btn btn-light text-success btn-sm m-1"><strong>תצוגה מקדימה ועריכה</strong></button>
                </div>
            </div>
        </>
    )
}
