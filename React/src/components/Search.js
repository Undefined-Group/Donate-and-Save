import React, { Component } from 'react'
import axios from './Axios';

export default class Search extends Component {
    state = {
        country: 'Jordan',
        state: 'All State',
        bloodType: 'A+'
    }

    changeValue = (e) => {
        // console.log('e.target.value', e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        // console.log('submet', this.state)
        e.preventDefault()
        let newState = { ...this.state }
        if (newState.state === 'All State') {//to get all states
            delete newState.state;
        }
        axios.post('/search', newState)
            .then(res => {
                if (res.data.length === 0) {
                    // console.log('object', res.data.length === 0)
                    this.props.setSearch(["notFound"], newState)
                }
                else { this.props.setSearch(res.data, newState) }

            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const borderSearch = {
            marginTop: "10%",
            backgroundColor: "white"
        }

        return (

            <React.Fragment>
                <div className="container"  >

                    <div className=" border border-danger rounded-pill p-4 " style={borderSearch}>
                        <div className="row">
                            <div className="col-3">
                                <select name="country" className="countries order-alpha presel-JO custom-select dropdown-toggle" onChange={this.changeValue} id="countryId">
                                    <option value="">Select Country</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select name="state" defaultValue={'Amman'} className="states order-alpha custom-select dropdown-toggle" onChange={this.changeValue} id="stateId">
                                    <option value="">All State</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select name="bloodType" defaultValue={'A+'} id="bloodType" className="custom-select dropdown-toggle" onChange={this.changeValue} >
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+" >O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <button type="submit" className="btn btn-danger btn-block" onClick={this.onSubmit}>Search</button>
                            </div>
                        </div>
                        {/* <div><p>hello</p></div> */}
                    </div>


                </div>

            </React.Fragment>
        )
    }
}
