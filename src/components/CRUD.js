import React from 'react'

export const CRUD = ({ componentRoute, deleteFromDB, handleEditable, editButton}) => {

    return (
        <div className="d-flex  ">
            <button onClick={deleteFromDB}><i className="btn material-icons text-danger text-center" 
            style={{ background: 'none', border: 'none', outlineColor: 'white' }}>delete_forever</i></button>
            <button onClick={handleEditable}><i className="btn material-icons text-primary text-center" 
            style={{ background: 'none', border: 'none', outlineColor: 'white' }}>save</i></button>
            <button onClick={editButton}><i className="btn material-icons text-warning text-center" 
            style={{ background: 'none', border: 'none', outlineColor: 'white' }}>edit</i></button>
        </div>
    )
}
