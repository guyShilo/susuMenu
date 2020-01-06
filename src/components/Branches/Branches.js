import React, { useState, useEffect, useContext } from 'react';
import './branches.css'
import EachBranch from './EachBranch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios';
import BranchesContext from '../Context/BranchesContext'
import Search from '../../Search'
import BranchForm from '../Branches/BranchForm'

const Branches = () => {
    document.title = 'Susu & Sons | סניפים'
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
    const [addClicked, setAddClicked] = useState(false)

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
            if (branchesState.branchesStorage.length <= 0) {
                console.log('done')
            }
        };
    }, [])

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
        <MuiThemeProvider>
            <div className="basicModal p-5 " style={floatingComponent()}>
                <BranchForm
                exitModalButton={exitModalButton} />
            </div>
            <div className="container text-center ">
                <div className="bounceInRight delay-1s animated ">
                    <Search
                        searchSomething={searchSomething}
                        searchColor={'springgreen'}
                    />
                </div>
                <div className="row d-flex justify-content-center p-1 bounceInDown animated">
                    <button onClick={() => { setAddClicked(!addClicked)}} 
                    className="btn btn-sm m-4 " style={{backgroundColor: 'springgreen'}}>הוסף סניף</button>
                </div>
                <div className="d-flex flex-column m-auto">
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
