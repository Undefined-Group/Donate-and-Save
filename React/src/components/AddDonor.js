import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "./Axios";
import Terms from "./Terms";
import AddSu from "./AddSu";

export default class AddDonor extends Component {
    state = {
        firstName: 'Benefactor',
        lastName: '',
        phone: '',
        email: '',
        bloodType: 'A+',
        country: 'Jordan',
        state: 'Amman',
        birthday: '',
        reports: [],
        checked: false,
        renderRedirect: "",
    }
    toggelButton = () => {
        this.setState({ checked: !this.state.checked })

    }

    changeValue = (e) => {
        if (e.target.name === "firstName" && e.target.value === "") {
            this.setState({ [e.target.name]: 'Benefactor' })
        }
        console.log('value', e.target.value)
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.name === "firstName" && e.target.value === "") {
            this.setState({ [e.target.name]: 'Benefactor' })
        }
    }


    onSubmit = (e) => {
        document.getElementById('openModal').click()
        e.preventDefault()
        let donor = { ...this.state }
        delete donor.checked;
        delete donor.renderRedirect;

        // console.log('donor', donor);
        axios.post("/addDonor/add", donor)
            .then(response => {
                // this.setState({ items: response.data })
                this.setState({ renderRedirect: <Redirect to='/' /> })

            })
            .catch(error => {
                console.log("Error", error);
            });


    }
    render() {

        return (
            <>
                <div className="bk-0 animated fadeInDown">
                    <form onSubmit={this.onSubmit} style={{ marginTop: "120px" }} className=" bk-0 " >
                        <div id="borderAddDonor" className="mr0" >

                            <div className="form-group  row">
                                <div className="col-4 pl-5 mt-2 ">
                                    <label className="font text-danger">First Name</label>
                                </div>
                                <div className="col-8">
                                    <input pattern="^[a-zA-Z]{2,15}$" title="Only Alphabet" maxLength="15" type="text" name="firstName" className="form-control input_filed inputEfect"
                                        onChange={this.changeValue} placeholder="The Default is Benefactor" />
                                </div>
                            </div>

                            <div className="form-group row ">

                                <div className="col-4 pl-5 mt-2">
                                    <label className="font text-danger">Last Name<span style={{ color: "green" }}> *</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input pattern="^[a-zA-Z]{2,15}$" title="Only Alphabet" maxLength="15" type="tel" name="lastName" className="inputEfect form-control input_filed"
                                        onChange={this.changeValue} value={this.state.lastName} placeholder="Enter Last Name ..." required />
                                </div>


                            </div>

                            <div className="form-group row ">

                                <div className="col-4 pl-5 mt-2">
                                    <label className="font text-danger">Phone Number</label>
                                </div>
                                <div className="col-8">
                                    <input pattern="^[+0-9]{6,20}$" title="Only Numbers; at least 6 characters" maxLength="20" type="tel" name="phone" className=" inputEfect form-control input_filed"
                                        onChange={this.changeValue} value={this.state.phone} placeholder="Enter Phone Number ..." required />
                                </div>

                            </div>

                            <div className="form-group row ">


                                <div className="col-4 pl-5 mt-2 ">
                                    <label className="font text-danger">Country</label>
                                </div>
                                <div className="col-8">
                                    <select name="country" className="countries order-alpha presel-JO custom-select inputEfect" onChange={this.changeValue} id="countryId">
                                        <option value="">Select Country</option>
                                    </select>
                                </div>

                            </div>

                            <div className="form-group row ">


                                <div className="col-4 pl-5 mt-2">
                                    <label className="font text-danger" >State</label>
                                </div>
                                <div className="col-8">
                                    <select name="state" defaultValue={'Amman'} className="states order-alpha custom-select inputEfect" onChange={this.changeValue} id="stateId">
                                        <option value="">Select State</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form-group row ">


                                <div className="col-4 pl-5 mt-2 my-auto ">
                                    <label className="font text-danger">Blood Type</label>
                                </div>
                                <div className="col-8">
                                    <select name="bloodType" defaultValue={'A+'} id="state" className="inputEfect custom-select"
                                        onChange={this.changeValue} >
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

                            </div>
                            <div className="form-group row">

                                <div className="col-4 pl-5 mt-2">
                                    <label className="font text-danger">Email<span style={{ color: "green" }}> *</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input title="example@gmail.com" type="email" name="email" onChange={this.changeValue} className="form-control inputEfect input_filed"
                                        value={this.state.email} placeholder="Enter Email ..." required />
                                </div>

                            </div>

                            <div className="form-group row ">

                                <div className="col-4 pl-5 mt-2">
                                    <label className="font text-danger " >Birthday<span style={{ color: "green" }}> *</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input onChange={this.changeValue} name="birthday" className="form-control inputEfect" type="date" min="1900-01-01" max={new Date().toJSON().slice(0, 10)} id="example-date-input" required />
                                </div>

                            </div>

                            <div className="form-check form-group row     ">
                                <div className='checkP'>
                                    <input className="form-check-input ml-2 " onClick={this.toggelButton} type="checkbox" id="" />
                                    <label className="form-check-label mx-2 px-4" for="exampleCheck1"> I read all
                                    <span
                                            className="badge-pill m-1 badge-danger"
                                            data-toggle="modal"
                                            data-target="#modelTerms"
                                        >Terms</span>and Yes I Can Donate
                                    </label>
                                </div>

                            </div>
                            <div className="form-check form-group row     ">
                                < p style={{ color: "green" }}>* It will be hidden in search</p>
                            </div>

                            <div className="form-group row   mt-4">
                                <div className="col-4 pl-5 mt-2"></div>
                                <button type="submit"
                                    disabled={
                                        this.state.checked === true
                                            ? false
                                            : true
                                    }
                                    className="btn btn-success">DONATE</button>


                            </div>

                        </div>



                    </form>
                    {this.state.renderRedirect}
                    <img alt="image1" className="bk-0 absolute1 infinite slow animated pulse " width='20%' src={require('./ht.png')} />
                    <AddSu />

                    <button
                        style={{ display: "none" }}
                        id='openModal'
                        data-toggle="modal"
                        data-target={`#addsu`}
                        className="btn btn-primary">MODAL</button>
                </div>

                <Terms />
            </>
        )
    }
}
