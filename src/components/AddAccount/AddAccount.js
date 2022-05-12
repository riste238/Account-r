import React, { Component }from 'react';

class AddAccount extends Component {

    state = {
        newAccount : {id: "",name: "", lastname: "", phone: "", email: ""}
    };

    changeHandler = (event) => {
        let id = event.target.id;
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = event.target.value;
        this.setState({newAccount: newAccountCopy});
       
    }
    
    sendDataFromInput = () => {
            this.props.changeOriginalHandler(this.state.newAccount);    
    }



    render (){
        return (
            <div className="container">
            <div className="row">
                <div className="col-10 offset-2">
                    <h3 className="display-4">Add Accounts</h3>
                    <div className="row">
                        <div className="col-8 offset-1">
                         <input onChange={this.changeHandler} type="text" id="id" placeholder="id" className="form-control"/><br />
                         <input onChange={this.changeHandler}  type="text" id="name" placeholder="name" className="form-control"/><br />
                         <input onChange={this.changeHandler}  type="text" id="lastname" placeholder="lastname" className="form-control"/><br />
                         <input onChange={this.changeHandler}  type="text" id="phone" placeholder="phone" className="form-control"/><br />
                         <input onChange={this.changeHandler}  type="email" id="email" placeholder="email" className="form-control"/><br />
                         <button onClick={this.sendDataFromInput} className="btn btn-info form-control">Create New Account</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddAccount;