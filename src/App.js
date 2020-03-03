import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/style.comp.css";
import Admin_page from "./pages/admin/admin_page";

class App extends React.Component {
    render(){
        return(
            <Admin_page />
        );
    }
}

export default App;
