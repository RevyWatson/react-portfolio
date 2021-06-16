import React from "react";
import "./style.css";

function Nav() {
    return (
        <div className="container-fluid text-center">
            <nav className="row">
                <div className="col-sm">
                    <li className="p-2">
                        <a href="/home">Home</a>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <a href="/about">About Alissa</a>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <a href="/gallery">Portfolio Gallery</a>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <a href="/contact">Contact Info</a>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav;