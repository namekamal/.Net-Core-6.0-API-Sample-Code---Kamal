import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CityList.css';
export class CityList extends Component {


    constructor() {
        super();
        this.state = { Name: '', Phone: '', Email: '' }
        this.UpdateUser = this.UpdateUser.bind(this);
    }

    submitUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               Name : this.state.Name,
               Email:this.state.Email,
               Phone:this.state.Phone
            })
        };
        fetch('https://localhost:7143/api/cityapi/post', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    UpdateUser(event) {
        switch (event.target.id) {
            case "name":
                this.setState({ Name: event.target.value });
                console.log(this.state.Name);
                return;

            case "phone":
                this.setState({ Phone: event.target.value });
                console.log(this.state.Phone);
                return;

            case "email":
                this.setState({ Email: event.target.value });
                console.log(this.state.Email);
                return;

            default: return;
        }
    }

    // componentDidMount() {
    //     // Simple POST request with a JSON body using fetch
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //            Name : this.state.Name,
    //            Email:this.state.Email,
    //            Phone:this.state.Phone
    //         })
    //     };
    //     fetch('https://localhost:7143/api/cityapi/post', requestOptions)
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <label>Name:</label>
                                <input type="text" id="name" onKeyUp={this.UpdateUser} />
                            </div>
                            <div className="col-sm">
                                <label>Email:</label>
                                <input type="email" id="email" onKeyUp={this.UpdateUser} />
                            </div>
                            <div className="col-sm">
                                <label>Phone:</label>
                                <input type="text" id="phone" onKeyUp={this.UpdateUser} />
                            </div>
                            <div className="col-sm">
                                <button type="submit" className="btn btn-danger" onClick={this.submitUser}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </>
        );
    }
}