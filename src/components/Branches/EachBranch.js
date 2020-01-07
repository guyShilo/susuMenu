import React, { useState, useRef, useContext } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from '../Context/UserContext'
import { CRUD } from '../CRUD'



const EachBranch = ({ branchObj }) => {
    const { branchName, branchAddress, branchOpening, branchIsKosher, branchCBTB, branchLunchPrice, id } = branchObj;
    const history = useHistory()

    // Setting up the Branch State
    const [branchesState, setBranchesState] = useState(branchObj)
    // Setting up the Editable Content State, if True, the content will become Editable
    const [editable, setEditable] = useState(false)
    // Setting up the Edit Mode State, if True, the content will become Editable
    const [editMode, setEditMode] = useState(false)
    // Importing login state from context
    const loginContext = useContext(UserContext)

    // Defining Styles for editing mode
    const compStyles = {
        border: '2px solid lightblue',
        borderRadius: '5px',
        margin: '2px',
        padding: '10px',
        backgroundColor: 'whitesmoke',
        color: 'black',
        buttonNone: {
            display: 'none'
        },
        hrColor: {
            backgroundColor: 'springgreen'
        }
    }
    // Defining references for Editable mode
    const refAddress = useRef(branchAddress)
    const refOpening = useRef(branchOpening)
    const refIsKosher = useRef(branchIsKosher)
    const refCBTB = useRef(branchCBTB)
    const refLunchPrices = useRef(branchLunchPrice)
    // Getting out of Edit Mode
    const exitFromEditMode = () => {
        setEditMode(false)
        setEditable(false)
        loginContext.loggedIn = false
        if (editMode) {
            alert('You are out of EDIT Mode')
        }
    }
    // Executing delte request to NodeJS server.
    const deleteFromDB = () => {
        const result = window.confirm('Are you sure you want to DELETE', false)
        axios.delete(`https://susu-menu.herokuapp.com/branches/deleteBranches/${branchesState._id}`)
            .then(res => { console.log(res) })
            .catch(err => {
                console.log(err)
            })
        if (result) {
            Swal.fire(
                'הסניף נמחק בהצלחה',
                'הועברת לרשימת המנות',
                'success',
            )
            history.push('/dishes')
            setTimeout(() => {
                window.location.reload(true);
            }, 500)
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
        const result = window.confirm('Are you sure you want to EDIT?', false)
        axios.put(`https://susu-menu.herokuapp.com/branches/patchBranches/${branchesState._id}`, {
            branchName: branchesState.branchName,
            branchAddress: refAddress.current.innerHTML,
            branchOpening: refOpening.current.innerHTML,
            branchIsKosher: refIsKosher.current.innerHTML,
            branchCBTB: refCBTB.current.innerHTML,
            branchLunchPrice: refLunchPrices.current.innerHTML,
        }).then(res => console.log(res))
            .catch(err => {
                console.log(err)
            })
        if (result) {
            alert('Edited')
            setEditMode(false)
        }
    }
    return (
        <>
            <div className="w-75 m-auto">
                <div className="branch-box mb-2 p-3 text-right text-light bounceInUp animated">
                    <div className="text-left">
                        <button onClick={exitFromEditMode} style={!editMode ? compStyles.buttonNone : { background: 'none', border: 'none', outlineColor: 'white' }}>
                            <i className="btn material-icons text-light text-center">exit_to_app</i></button>
                    </div>
                    <div className="text-center d-flex flex-column col-sm-5 mt-1">
                        <h4
                            suppressContentEditableWarning={true}
                            contentEditable={editable}>{`סניף ${branchesState.branchName}`}</h4>
                    </div>
                    <hr className="bounceInRight animated delay-1s" style={compStyles.hrColor} />
                    <div className="text-right">
                        <span>
                            <label>כתובת הסניף:</label> <p
                                style={editMode ? compStyles : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refAddress}>{branchesState.branchAddress}</p>
                        </span>
                        <span>
                            <label>שעות פתיחה:</label> <p
                                style={editMode ? compStyles : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refOpening}>{branchesState.branchOpening}</p>
                        </span>
                        <span>
                            <label>כשרות:</label> <p
                                style={editMode ? compStyles : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refIsKosher}>{branchesState.branchIsKosher}</p>
                        </span>
                        <span>
                            <label>כרטיסי חברות:</label><p
                                style={editMode ? compStyles : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refCBTB}>{branchesState.branchCBTB}</p>
                        </span>
                        <span>
                            <label>שעות העסקיות:</label><p
                                style={editMode ? compStyles : null}
                                suppressContentEditableWarning={true}
                                contentEditable={editable}
                                ref={refLunchPrices}>{branchesState.branchLunchPrice}</p>
                        </span>
                    </div>
                    <hr className="bounceInRight animated delay-1s" style={compStyles.hrColor} />
                    <div className="d-flex justify-content-center branch-footer" style={!loginContext.loggedIn ? null : compStyles.buttonNone}>
                        <CRUD
                            editMode={editMode}
                            editable={editable}
                            deleteFromDB={deleteFromDB}
                            handleEditable={handleEditable}
                            editButton={editButton}
                            componentRoute='/addBranch'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EachBranch