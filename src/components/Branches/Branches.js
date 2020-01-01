import React, { useState, useEffect, useContext } from 'react';
import './branches.css'
import EachBranch from './EachBranch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios';
import BranchesContext from '../Context/BranchesContext'
import Search from '../../Search'



const Branches = () => {
    //Gettin data from context
    const newBranches = useContext(BranchesContext)
    //Setting Branches State
    const [branchesState, setBranchesState] = useState({
        branchesStorage: []
    })
    //Setting filtered Branches State
    const [filteredState, setFilteredState] = useState({
        filteredStorage: []
    })
    // Getting data from context and setting it to the states
    const getDataFromContext = () => {
        newBranches.branchesStorage.then(data => {
            setBranchesState({ branchesStorage: data });
            setFilteredState({ filteredStorage: data })
        })
    }
    // Getting the search term fro the Search component
    const searchSomething = (term) => {
        const result = branchesState.branchesStorage.filter(branch => branch.branchName.indexOf(term) != -1);
        if (result.length == 0) {
            setFilteredState({
                filteredStorage: branchesState.branchesStorage
            })
        } else {
            setFilteredState({
                filteredStorage: result
            })
        }
    }
    // Run the getDataFromContext function once.
    useEffect(() => {
        getDataFromContext()
        return () => {
            getDataFromContext()
        };
    }, [])
    return (
        <MuiThemeProvider>
            <div className="container">
                <div className="bounceInRight delay-1s animated"    >
                    <Search
                        searchSomething={searchSomething}
                        searchColor={'springgreen'}
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    {filteredState.filteredStorage.map(branch =>
                        <EachBranch
                            branchObj={branch}
                            key={branch._id}
                        />
                    )}
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default Branches
