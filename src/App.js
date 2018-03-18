import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import Sidebar from './components/sidebar/sidebar'
import store from "./store";
import PopularArticles from "./components/popular-articles/popular-articles";

class App extends Component {
    render() {
        return (
                <div className="App">
                    <Sidebar/>
                    <h1 className='header'>bla bla</h1>
                    <div className='main'>
                        <PopularArticles/>
                    </div>
                </div>
        );
    }
}

export default App;
