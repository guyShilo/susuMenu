import React, { useState } from 'react'
import './Admin.css'
import { CRUD } from '../CRUD'
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
            <div className="basicModal p-5 " style={floatingComponent()}>
                <Dish dishObj={obj} key={obj._id} exitModalButton={exitModalButton} />
            </div>
            <div className="basicModal p-5 " style={floatingComponent()}>
                <EachBranch branchObj={obj} key={obj._id} exitModalButton={exitModalButton} />
            </div>
            <div className="eachProduct bg-light m-auto fadeInDown animated">
                <div className="text-center d-flex justify-content-between mt-3 row">
                    <p className="mt-3 col-sm-2">{title}</p>
                    <p className="mt-3 col-sm-1">|</p>
                    <button onClick={() => {setAddClicked(!addClicked) }}
                        className="btn btn-warning btn-sm m-1">תצוגה מקדימה</button>
                    <div className="p-2 mb-2 col-sm-4 ">
                        <CRUD />
                    </div>
                </div>
            </div>
        </>
    )
}
