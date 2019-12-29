import React from 'react'

export const Main = () => {
    const styles = {
        border: {
            borderRadius: '9px',
            border: '1px solid white'
        }
    }
    return (
        <>
            <div className="container">
                <div className="col-sm-12 text-center m-2 p-3 bg-dark text-light" style={styles.border}>
                    <h1>הודעות היום</h1>
                    <hr className="col-sm-8 bg-light" />
                    <div>
                        <span><strong>כותרת ההודעה</strong></span>
                        <hr className="col-sm-3 bg-light" />
                        <div className="m-2 p-3">
                            <p>גוף ההודעה</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
