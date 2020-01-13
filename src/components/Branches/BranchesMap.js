import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import EachBranch from '../Branches/EachBranch'

const BranchesMap = (props) => {

    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <div>
            <Map google={props.google} zoom={14}
            initialCenter={{lat: 32.067007, lng: 34.803094}}/>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6q9SXOeUrvMWG5z2FU9Yh4Fin4VftzgQ'
})(BranchesMap);