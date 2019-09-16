import React, { Component } from 'react'
import Delete from "./Delete";
import Report from "./Report";
import Phone from './Phone'

export default class Details extends Component {
    state = {
        deleteDonor: '0',
        reportDonor: ''
    }
    getAge = (dateString) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    deleteDonor = (i) => {
        console.log('delete doner')
        this.setState({ deleteDonor: <Delete donor={this.props.details} i={i} /> });

        // console.log('deleteDonor', this.props.details._id)
    }
    reportDonor = () => {
        console.log('reportDonor')

    }


    render() {
        const { details, i, lastSearch, setSearch } = this.props

        return (
            <>
                <tr className='text-center'>
                    <th scope="row">{i + 1}</th>
                    <td>{details.firstName}</td>
                    {/* <td>{this.getAge(details.birthday.slice(0, 10))}</td> */}
                    <td className="text-danger text-center" >{details.bloodType}</td>
                    <td>{details.state}</td>
                    <td><button className="text-info dropdown-item" onClick={() => document.getElementById(`phone${i}`).click()} >{`Call Now`}</button></td>
                    <td>{details.dateOfPublish.slice(0, 10)}</td>
                    <td>
                        <a className="info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            &#8226;	&#8226;	&#8226;	 </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <button
                                type="button"
                                className="dropdown-item text-danger"
                                data-toggle="modal"
                                data-target={`#myModal${i}`}
                            >
                                Delete</button>
                            <button
                                type="button"
                                className="dropdown-item text-info"
                                data-toggle="modal"
                                data-target={`#Modalreport${i}`}
                            >
                                Report</button>
                        </div>
                    </td>
                </tr>
                <button
                    style={{ display: "none" }}
                    id={`phone${i}`}
                    type="button"
                    className="dropdown-item text-info"
                    data-toggle="modal"
                    data-target={`#mobileModal${i}`}
                ></button>
                <Delete lastSearch={lastSearch} setSearch={setSearch} donor={details} i={i} />
                <Report donor={details} i={i} />
                <Phone donor={details} i={i} />

            </>
        )
    }
}


