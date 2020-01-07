import React, { useState, useRef, useContext, useEffect } from "react";
import "../Dishes/dish.css"
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2'
import UserContext from '../Context/UserContext'
import DishesContext from '../Context/DishesContext'
import { CRUD } from "../CRUD";



const Dish = ({ dishObj, exitModalButton }) => {
    const { title, description, price, img, sizes, allergic, rest, delivery, id } = dishObj;
    // Setting up the Dish State
    const [dishState, setDishState] = useState(dishObj)
    // Setting up the Editable Content State, if True, the content will become Editable
    const [editable, setEditable] = useState(false)
    // Setting up the Edit Mode State, if True, the content will become Editable
    const [editMode, setEditMode] = useState(false)
    // Importing login state from context
    const loginContext = useContext(UserContext)

    const history = useHistory()

    // Defining Styles for editing mode
    const editStyle = {
        border: '2px solid lightblue',
        borderRadius: '5px',
        margin: '2px',
        padding: '10px',
        backgroundColor: 'whitesmoke',
        color: 'black',
        buttonNone: {
            display: 'none'
        },
    }
    // Defining references for Editable mode
    const refTitle = useRef(title)
    const refDescription = useRef(description)
    const refPrice = useRef(price)
    const refAllergic = useRef(allergic)
    const refDelivery = useRef(delivery)
    // Getting out of Edit Mode
    const exitFromEditMode = () => {
        setEditMode(false)
        setEditable(false)
        if (editMode) {
            alert('You are out of EDIT Mode')
        }
    }
    // Executing delte request to NodeJS server.
    const deleteFromDB = () => {
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
    }
    // Handling Edit mode change
    const editButton = (e) => {
        setEditMode(true)
        setEditable(true)
        alert('Entering EDIT Mode')
    }
    // Handling post method after editable change
    const handleEditable = e => {
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
    return (
        <div className=" dishContainer m-2 bounceInUp animated p-1 ">
            {exitModalButton ? <button onClick={exitModalButton} className="btn btn-dark btn-sm ">
                <i className="material-icons text-center" >exit_to_app</i>
                <br />
                <small>חזור אחורה</small>
            </button> : null}
            <div className="flex-container text-light  text-center w-100 " >
                <div className="d-flex flex-row-reverse">
                    <button onClick={exitFromEditMode} style={!editMode ? editStyle.buttonNone
                        : { background: 'none', border: 'none', outlineColor: 'white' }}>
                        <i className="btn material-icons text-light text-center">exit_to_app</i></button>
                </div>
                <div className="col-sm-4">
                    <h4
                        suppressContentEditableWarning={true}
                        contentEditable={editable}
                        ref={refTitle}>{dishState.dishTitle}</h4>
                </div>
                <div>
                    <hr className="bounceInRight delay-1s animated" style={{ backgroundColor: 'gold' }} />
                    <img className="float-left img-thumbnail shadow-sm" style={editMode ? editStyle.buttonNone
                        : { width: '360px' }} src={dishState.dishImage} alt="" />
                </div>
                <div className="text-right">
                    <span>
                        <label>תיאור המנה:</label> <p
                            style={editMode ? editStyle : null}
                            suppressContentEditableWarning={true}
                            contentEditable={editable}
                            ref={refDescription}>{dishState.dishDescription}</p>
                    </span>
                    <div>
                        <span>
                            <label>רכיבים אלרגניים:</label> <p
                                style={editMode ? editStyle : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refAllergic}>{dishState.dishAllergic}</p>
                        </span>
                        <span>
                            <label>מחיר המנה: </label> <p
                                style={editMode ? editStyle : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refPrice}>{dishState.dishPrice}</p>
                        </span>
                        <span>
                            <label>הגשה במשלוח: </label> <p
                                style={editMode ? editStyle : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refDelivery}>{dishState.dishDelivery}</p>
                        </span>
                    </div>
                    <hr className="bounceInRight delay-1s animated" style={{ backgroundColor: 'gold' }} />
                </div>
                <div className="text-center dish-footer" style={loginContext.loggedIn ? null : editStyle.buttonNone}>
                    <CRUD
                        editMode={editMode}
                        editable={editable}
                        deleteFromDB={deleteFromDB}
                        handleEditable={handleEditable}
                        editButton={editButton}
                        componentRoute='/addDish'
                    />
                </div>
            </div>
        </div>

    )
}

export default Dish