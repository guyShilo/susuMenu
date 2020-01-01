import React, { useState, useRef, useContext } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from '../Context/UserContext'



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
    const refName = useRef(branchName)
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
        axios.delete(`https://susu-menu.herokuapp.com/branches/deleteBranches/${id}`)
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
        axios.put(`https://susu-menu.herokuapp.com/branches/patchBranches/${id}`, {
            branchName: refName.current.innerHTML,
            branchAddress: refAddress.current.innerHTML,
            branchOpening: refOpening.current.innerHTML,
            branchIsKosher: refIsKosher.current.innerHTML,
            branchCBTB: refCBTB.current.innerHTML,
            branchLunchPrice: refLunchPrices.current.innerHTML,
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
            setEditable(false)
        }
    }
    return (
        <>
            <div className="w-75">
                <div className="branch-box m-3 p-3 text-right text-light bounceInUp animated">
                    <div className="text-left">
                        <button onClick={exitFromEditMode} style={!editMode ? compStyles.buttonNone : { background: 'none', border: 'none', outlineColor: 'white' }}>
                            <i className="btn material-icons text-light text-center">exit_to_app</i></button>
                    </div>
                    <div className="text-center d-flex flex-column col-sm-5 mt-1">
                        <h4
                            suppressContentEditableWarning={true}
                            contentEditable={editable}
                            ref={refName}>{`סניף ${branchesState.branchName}`}</h4>
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
                    <div className="text-center p-1 dish-footer " style={loginContext.loggedIn ? null : compStyles.buttonNone}>
                        <button onClick={deleteFromDB} style={{ background: 'none', border: 'none', outlineColor: 'white', }}><i className="btn material-icons text-danger text-center">delete_forever</i></button>
                        <button onClick={handleEditable} style={{ background: 'none', border: 'none', outlineColor: 'white' }}><i className="btn material-icons text-primary text-center">save</i></button>
                        <button onClick={editButton} style={{ background: 'none', border: 'none', outlineColor: 'white' }}><i className="btn material-icons text-warning text-center">edit</i></button>
                        <Link to="/addBranch">
                            <button style={{ background: 'none', border: 'none', outlineColor: 'white' }}><i className="btn material-icons text-center text-success">add</i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EachBranch