import React, { useState } from 'react';
import AddBranch from './AddBranch'
import ConfirmBranch from './ConfirmBranch'



const BranchForm = () => {
    // Setting a default state for the form component
    const [branchFormState, setBranchFormState] = useState({
        step: null,
        branchName: '',
        branchAddress: '',
        branchOpening: '',
        branchIsKosher: '',
        branchCBTB: '',
        branchLunchPrice: '',
        branchId: ''
    })
    // Getting the input and value from AddDish component
    const handleChange = input => e => {
        e.preventDefault()
        setBranchFormState({
            ...branchFormState,
            [input]: e.target.value,
        });
    }
    // Handling 'Next Step' button by updating the state.
    const nextStep = () => {
        setBranchFormState({
            ...branchFormState,
            step: branchFormState.step + 1
        })
    }
    // Handling 'Previous Step' button by updating the state.
    const prevStep = () => {
        setBranchFormState({
            ...branchFormState,
            step: branchFormState.step - 1
        })
    }
    //Switches based on step, AddDish by default and Confirm while pressing 'next step' button.
    switch (branchFormState.step) {
        case 0: return (
            <div className="flex d-flex flex-row justify-content-center m-3 text-center ">
                <AddBranch
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={branchFormState}
                />
            </div>)
        case 1: return (<ConfirmBranch
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            values={branchFormState}
        />)
    }
}



export default BranchForm