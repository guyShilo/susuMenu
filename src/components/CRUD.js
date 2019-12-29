import React from 'react'
import {Link} from 'react-router-dom'

export const CRUD = ({ editMode, editable, deleteFromDB, handleEditable, editButton }) => {
    return (
        <div className="d-flex  ">
            <button onClick={deleteFromDB}><i className="btn material-icons text-danger text-center" style={{ background: 'none', border: 'none', outlineColor: 'white' }}>delete_forever</i></button>
            <button onClick={handleEditable}><i className="btn material-icons text-primary text-center" style={{ background: 'none', border: 'none', outlineColor: 'white' }}>save</i></button>
            <button onClick={editButton}><i className="btn material-icons text-warning text-center" style={{ background: 'none', border: 'none', outlineColor: 'white' }}>edit</i></button>
            <Link to="/addDish">
                <button style={{ background: 'none', border: 'none', outlineColor: 'white', textDecoration: 'none' }}><i className="btn material-icons text-success text-center">add</i></button>
            </Link>
        </div>
    )
}
