import React from 'react';

const functionsObject = {
    deleteFromDB = () => {
        const result = window.confirm('האם את/ה בטוח שאת/ה רוצה למחוק את המנה?', false)
        axios.delete(`https://susu-menu.herokuapp.com/dishes/deleteDishes/${dishState._id}`)
            .then(res => { console.log(res) })
            .catch(err => {
                console.log(err)
            })
        if (result) {
            Swal.fire(
                'המנה נמחקה בהצלחה',
                'הועברת לרשימת המנות',
                'success',
            )
            history.push('/dishes')
        }
    }, editButton = (e) => {
        setEditMode(true)
        setEditable(true)
        alert('Entering EDIT Mode')

    }, handleEditable = e => {
        setEditable(false)
        const result = window.confirm('Are you sure you want to EDIT?', false)
        axios.put(`https://susu-menu.herokuapp.com/dishes/patchDishes/${dishState._id}`, {
            dishTitle: refTitle.current.innerHTML,
            dishDescription: refDescription.current.innerHTML,
            dishAllergic: refAllergic.current.innerHTML,
            dishDelivery: refDelivery.current.innerHTML,
            dishPrice: refPrice.current.innerHTML,
        }).then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
            .catch(err => {
                console.log(err)
            })
        if (result) {
            alert('Edited')
            setEditMode(false)
        }
    }

}

const UserContext = React.createContext({loggedIn: getCurrentLoginStatus()})

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext