import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BranchesContext from '../Context/BranchesContext'
import { EachProduct } from './EachProduct'

export const EditBranches = () => {
    //Gettin data from context
    const newBranches = useContext(BranchesContext)
    //Setting Branches State
    const [branchesState, setBranchesState] = useState({
        branchesStorage: []
    })
    // Getting data from context and setting it to the states
    const getDataFromContext = () => {
        newBranches.branchesStorage.then(data => {
            setBranchesState({ branchesStorage: data });
        })
    }
    useEffect(() => {
        getDataFromContext()
        return () => {
            if (branchesState.branchesStorage.length <= 0) {
                console.log('done')
            }
        };
    }, [])
    return (
        <div className="">
            <div className="text-right text-light">
                <h4>{`כמות הסניפים בתפריט:  ${branchesState.branchesStorage.length}`}</h4>
                {branchesState.branchesStorage.map(branch =>
                    <EachProduct obj={branch} key={branch._id}
                    />)}
            </div>
        </div>
    )
}
