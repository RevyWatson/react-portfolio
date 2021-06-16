import React from "react";
import "./style.css";

function Nav() {
    return (
        <div class="container-fluid text-center">
            <nav class="row">
                <div class="col-sm">
                    <li class="p-2" id="home">
                        <a href="index.html">Home</a>
                    </li>
                </div>
                <div class="col-sm">
                    <li class="p-2" id="about">
                        <a href="about.html">About Alissa</a>
                    </li>
                </div>
                <div class="col-sm">
                    <li class="p-2" id="gallery">
                        <a href="gallery.html">Portfolio Gallery</a>
                    </li>
                </div>
                <div class="col-sm">
                    <li class="p-2" id="contact">
                        <a href="contact.html">Contact Info</a>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav;