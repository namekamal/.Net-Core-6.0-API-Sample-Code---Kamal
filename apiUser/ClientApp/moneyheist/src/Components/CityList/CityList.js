import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CityList.css';
import axios from 'axios';
export class CityList extends Component {

    constructor() {
        super();
        this.state = { Name: '', Phone: '', Email: '' }
        this.UpdateUser = this.UpdateUser.bind(this);
    }


    submitUser = () => {


        const city = {
            Name: 'qwerty',
            Phone: 'BBBBBBB',
            Email: 'qwe'
        };

        //const article = { title: 'React POST Request Example' };
        axios.post('https://localhost:7143/api/cityapi/post', city)
            .then(response => this.setState({ Name: response.data.Name }));
    }

    componentDidMount = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'https://localhost:7143/api/cityapi/get', true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            // this.setState({ data: data });
        };
        xhr.send();

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
                                <button type="button" className="btn btn-danger" onClick={this.submitUser}>
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </>
        );
    }
}