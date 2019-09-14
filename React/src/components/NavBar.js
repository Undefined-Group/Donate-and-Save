import React, { Component } from 'react'

export default class navBar extends Component {
    render() {
        return (
            <nav className="navShadow navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container ">
                    <a className="navbar-brand js-scroll-trigger text-danger navTitle " href="/">Donate and Save</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                     <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {/* <i className="fas fa-search"></i> */}
                                <a className=" sizef nav-link js-scroll-trigger text-danger fas fa-search " href="/requster">  Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="sizef nav-link js-scroll-trigger text-danger fas fa-plus" href="/adddonor">  Donate</a>
                            </li>
                            <li className="nav-item">
                                {/* <i className="fas fa-question"></i> */}
                                <a className=" sizef nav-link js-scroll-trigger fas fa-question  text-danger" href="/about">  About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            // <div>
            //     <div className="container-fluid">
            //         <div id="nav" className="row">
            //             <div className="col-2">
            //                 <img id="logo"
            //                     src="https://www.lgl.lt/en/files/2015-09-18.jpg"
            //                     alt="logo"
            //                 ></img>
            //             </div>
            //             <div className="col-10 mt-3">
            //                 <ul className="nav justify-content-end">
            //                     <li className="nav-item">

            //                         <Link to="/about">
            //                             <button id="Aboutbutton" type="button" className="btn btn-danger w-100 h-75">
            //                                 About Us
            //     </button>
            //                         </Link>

            //                     </li>



            //                 </ul>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
