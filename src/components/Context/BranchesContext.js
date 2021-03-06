import React from 'react';
import axios from 'axios'

let BranchesContext = React.createContext({branchesStorage: returnArray()});

async function returnArray() {
    let branches = [];
    await axios.get(`https://susu-menu.herokuapp.com/branches`)
    .then(res => {
        branches = res.data.data
    })
    return branches
}

export const BranchesProvider = BranchesContext.Provider;
export const BranchesConsumer = BranchesContext.Consumer;

export default BranchesContext