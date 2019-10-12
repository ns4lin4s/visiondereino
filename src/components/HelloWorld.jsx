import React from 'react'
import '../assets/styles/App.scss'
import TypedReact from './TypedReact'

const HelloWorld = () => (
    <React.Fragment>
        <div className="container">
            <div className="header">
                <div className="logo">
                    <div className="icon-logo"><i className="fas fa-fire"></i></div>
                    
                    <h1>Visión de Reino</h1>
                </div>
            </div>
            <div className="entry-content">
                
                <div className="banner">
                    <div className="welcome">
                        <h1>¡Bienvenido!</h1>
                        <p>apostólica visión de <span>reino.</span></p>
                        <TypedReact
                            strings={[
                                'Some <i>strings</i> are slanted',
                                'Some <strong>strings</strong> are bold',
                                'HTML characters &times; &copy;'
                            ]}
                        />
                    </div>
                </div>
                <div className="opacity"></div>

                

            </div>
        </div>
        
    </React.Fragment>
    

)

export default HelloWorld;
