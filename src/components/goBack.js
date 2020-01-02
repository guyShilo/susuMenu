import React from 'react'
import { useHistory } from 'react-router-dom'

const GoBack = ({goBack}) => {
    const history = useHistory()

    return (
        <div>
            <small className="text-light p-1">חזור אחורה</small>
            <button onClick={() => {goBack ? goBack() : history.goBack()}}
                className="btn btn-sm">
                <i className="material-icons text-light">exit_to_app</i>
            </button>
        </div>
    )
}

export default GoBack