import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './components/Dishes/dishLogic.css'


export const Main = ({ searchSomething, searchColor }) => {
    const handleChange = input => e => {
        let afterSearchTerm = []
        afterSearchTerm.push(e.target.value)
        searchSomething(afterSearchTerm)
        console.log(afterSearchTerm)
    }


    const inputStyle = {
        underlineStyle: {
            borderColor: searchColor,
        },
        underlineFocusStyle: {
            borderColor: searchColor,
        },
        floatingTextColor: {
            color: searchColor
        },
        searchDiv: {
            borderRadius: '8px',
            boxShadow: '0px 0px 25px 10px rgba(0,0,0,0.2)',
        },
        textColor: {
            color: 'white'
        }
    }
    return (
        <MuiThemeProvider>
            {/* {searchTerm.searchTerm = searchFormDishes.dishesStorage.map(dish => dish.title) || null ? <h1>ddd</h1> : <p>dddd</p>} */}

            <div>
                <div className="p-3 m-2">
                    <form name="searchForm">
                        <div className="bg-dark p-2 m-2 searchDiv" style={inputStyle.searchDiv}>
                            <TextField
                                className="w-100"
                                floatingLabelText="👈        חפש מנה"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                onChange={handleChange('searchTerm')}
                                defaultValue={null}
                                textareaStyle={inputStyle.textColor}
                                inputStyle={inputStyle.textColor}
                            />
                            {/* <button type="submit"
                                form="searchForm"
                                onClick={handleSubmit}
                                className="btn btn-sm searchDiv w-100">👇</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default Main