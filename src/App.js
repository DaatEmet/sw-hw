import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
    return (
        <div className="container-fluid">
            <div className='header'>
                <Header/>
            </div>
            <div>
                <Main/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>

    );
};

export default App;