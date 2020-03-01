import React from 'react';
import logo from './logo.svg';
import './App.css';
import "css/stlye.comp.css";

class App extends React.Component {
    render(){
        return('<div className="switch-radio-example">
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }}/>
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
            </div>');
    }
}

export default App;
