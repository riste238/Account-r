import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header  from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import AccountTable from './components/AccountTable/AccountTable';
import AddAccount from './components/AddAccount/AddAccount';

class App extends Component {

    state = {
        data : 
        [
            {id: 1,name:"riste", lastname:"boshev",phone:"11-22-33",email:"riste@gmail.com"},
            {id: 2,name:"deki", lastname:"boshev",phone:"44-22-33",email:"deki@gmail.com"}
        ]
    }
     changeOriginalHandler = (acc) => {
            this.setState({data : [...this.state.data,acc]})
          
     }

    render(){
        return(
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact="true" element={<AccountTable data={this.state.data} />}></Route>
                    <Route path="/add" element={<AddAccount  changeOriginalHandler={this.changeOriginalHandler}/>}></Route>
                </Routes>
            </Router>
          
          
        )
    }
}

export default App;