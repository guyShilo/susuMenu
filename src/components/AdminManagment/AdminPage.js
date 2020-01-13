import React from 'react'
import { EachProduct } from './EachProduct'
import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { EditDishes } from './EditDishes'
import { EditBranches } from './EditBranches'
import UserContext from '../Context/UserContext'
import NoMatch from '../../NoMatch'


export const AdminPage = ({loginStatus}) => {
    document.title = 'Susu & Sons | עמוד ניהול'
    const [adminPageState, setAdminPageState] = useState(0)
    const checkLogin = () => {
        if(!loginStatus) {
            return <NoMatch/>
        } else {
            return (
                <div className="container ">
                    <div className="adminPage bg-light m-2 col-sm-12 bounceInUp animated ">
                        <div className="text-center">
                        <button onClick={() => setAdminPageState(0)}>
                        <small className="p-2 m-auto text-light"><strong>לעריכת המנות</strong></small>
                            <svg className="fadeInDown delay-1s animated" style={{width: '50px', height: '50px'}} viewBox="0 0 24 24">
                                <path fill="lightsteelblue" d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,
                                3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2
                                ,18H13M3,15H8L9.5,16.5L11,15H12A1,1 0 0
                                ,1 13,16A1,1 0 0,1 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15Z" />
                            </svg>
                        </button>
                        <button onClick={() => setAdminPageState(1)}>
                            <small className="p-2 m-auto text-light"><strong>לעריכת הסניפים</strong></small>
                            <svg className="fadeInDown delay-1s animated" style={{width: '35px', height: '35px'}} viewBox="0 0 24 24">
                            <path fill="lightsteelblue" d="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 
                            2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z" />
                            </svg>
                        </button>
                        </div>
                        <div className="p-2 mb-1">
                            <div className="p-5">
                            <RenderProducts step={adminPageState} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (checkLogin())
}

export const RenderProducts = ({step}) => {
   switch (step) {
       case 1: return <EditBranches/>
           break;
       default: return <EditDishes/>
           break;
   }
}
