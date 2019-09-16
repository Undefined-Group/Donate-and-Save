import React, { Component } from 'react'
import Details from './Details'
export class SearchResults extends Component {
    state = {
        c: 15, //capasity of tabile 
        notFounf: ""
    }
    seeMore = () => {
        this.setState({ c: this.state.c + 15 })

    }



    render() {
        const { setSearch, search, lastSearch } = this.props
        // console.log('search.length1', search.length)

        if (search[0] !== "notFound" && search[0] !== 0) {
            let search10 = [...search.slice(0, this.state.c)]
            let list = search10.map((details, i) => (<Details lastSearch={lastSearch} setSearch={setSearch} key={i} i={i} details={details} />));
            return (<>

                <div className="col-xl-7  m-4  mx-auto ">
                    <p className="text-white">About {search.length} Donor found </p>
                    <table className="table table-striped ">
                        <thead className="tabilOptic text-center">
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                {/* <th scope="col">Age</th> */}
                                <th className="text-danger" scope="col">Blood Type</th>
                                <th scope="col">State</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Date of Publish</th>
                                <th scope="col">&#8226;	&#8226;	&#8226;</th>

                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <button className="btn btn-link text-white" style={{ visibility: search.length < 16 ? 'hidden' : 'visible' }} onClick={this.seeMore} >See more</button>
                </div>
            </>
            );
        }
        else if (search[0] === "notFound") {//if search not found
            return (<> <h1 className="text-center m-5 text-white">Sorry , We couldn’t find any Donor</h1>
                <img alt="image2" className="searchPNG slow animated fadeIn" width='30%' src={require('./Blood-Donation-PNG-Pic.png')} />
            </>);
        }
        else if (search[0] === 0) {//inital or Defualt
            return (<><img alt="image3" className="searchPNG slow animated fadeIn" width='50%' src={require('./searchSes.png')} /></>);
        }

    }




}

export default SearchResults
