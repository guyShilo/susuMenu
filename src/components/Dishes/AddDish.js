import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './form.css'
import GoBack from '../goBack';

const AddDish = ({ handleChange, values, nextStep }) => {
    // Defining the styles of the Inputs
    const inputStyle = {
        underlineStyle: {
            borderColor: 'springgreen',
        },
        underlineFocusStyle: {
            borderColor: 'springgreen',
        },
        floatingTextColor: {
            color: 'springgreen'
        },
        textColor: {
            color: 'white'
        }   
    }
    
    const handleValidation = () => {
        if(values.dishTitle === ''){
            return true
        }
        else {
           return false
        }
    }

    return (
        <MuiThemeProvider>
            <div>
                <GoBack />
                <form noValidate autoComplete="off">
                    <div className="mainFormDiv p-3 bg-dark fadeIn animated row">
                        <br />
                        <div className="col-sm-12">
                            <TextField
                                className="w-100"
                                floatingLabelText="הכנס שם מנה"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                onChange={handleChange('dishTitle')}
                                defaultValue={values.dishTitle}
                            />
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <TextField
                                className="w-100 text-right"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס את תיאור המנה"
                                onChange={handleChange('dishDescription')}
                                defaultValue={values.dishDescription}
                            />
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס רכיבים אלרגניים"
                                onChange={handleChange('dishAllergic')}
                                defaultValue={values.dishAllergic || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס אריזה במשלוח"
                                onChange={handleChange('dishDelivery')}
                                defaultValue={values.dishDelivery || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס מחיר"
                                onChange={handleChange('dishPrice')}
                                defaultValue={values.dishPrice || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={false}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס תמונה"
                                onChange={handleChange('dishImage')}
                                defaultValue={values.dishImage || ''} />
                            <br />
                        </div>
                        <div className="text-center col-sm-12 ">
                            <RaisedButton
                                label="המשך"
                                primary={false}
                                className="buttonForm"
                                disabled={handleValidation()}
                                onClick={nextStep}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    )
}
export default AddDish