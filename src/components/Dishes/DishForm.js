import React, { useState, useEffect, useContext } from 'react';
import AddDish from './AddDish'
import Confirm from './ConfirmDish'


const DishForm = ({exitModalButton}) => {
    document.title = 'Susu & Sons | הוסף מנה'
    // Setting a default state for the form component
    const [dishFormState, setDishFormState] = useState({
        step: 0,
        dishTitle: '',
        dishDescription: '',
        dishPrice: 0,
        dishImage: '',
        dishAllergic: '',
        dishDelivery: '',
        isExtra: false
    })
    // Getting the input and value from AddDish component
    const handleChange = input => e => {
        e.preventDefault()
            setDishFormState({
                ...dishFormState,
                [input]: e.target.value,
            });
        let validateArray = []
        validateArray.push({[input]: e.target.value})
        validateArray.forEach(element => {
            if(element){
                console.log('full')
            }
            else {
                console.log('you forgot')
            }
        })
    }
    // Handling 'Next Step' button by updating the state.
    const nextStep = () => {
        setDishFormState({
            ...dishFormState,
            step: dishFormState.step + 1
        })
    }
    // Handling 'Previous Step' button by updating the state.
    const prevStep = () => {
        setDishFormState({
            ...dishFormState,
            step: dishFormState.step - 1
        })
    }
    //Switches based on step, AddDish by default and Confirm while pressing 'next step' button.
    switch (dishFormState.step) {
        case 1: return <div >
            <Confirm
                handleChange={handleChange}
                values={dishFormState}
                nextStep={nextStep}
                prevStep={prevStep}
            />
        </div>
        case 0:
            return <div className="flex d-flex flex-row justify-content-center m-3 text-center">
                <AddDish
                    exitModalButton={exitModalButton}
                    handleChange={handleChange}
                    values={dishFormState}
                    nextStep={nextStep}
                />
            </div>
            break;
    }
}

// Exporting the component
export default DishForm