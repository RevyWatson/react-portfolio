import React from "react";

function Contact() {
    return (
        <div class="container">
            <section class="row p-3">
                <div class="col-lg-12">
                    <h3 class="text-center p-3">
                        Contact Information
                    </h3>
                </div>
                <div class="container">
                    <div class="row p-3">
                        <div class="col-lg-6 col-sm-12 text-center p-2">
                            <p>
                                <i class="fab fa-github fa-2x p-1"></i> <a href="https://github.com/RevyWatson"
                                    target="_blank">Check out my GitHub</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin fa-2x p-1"></i> <a
                                    href="https://www.linkedin.com/in/alissa-garzoni-911a3032/" target="_blank">Visit my
                                    LinkedIn</a>
                            </p>
                        </div>
                        <div class="col-lg-6 col-sm-12 text-center p-2">
                            <p>
                                <i class="fas fa-phone-square-alt fa-2x"></i> (248)996-2609
                            </p>
                            <p>
                                <i class="fas fa-envelope fa-2x"></i> garzoni.webdev@gmail.com
                            </p>
                        </div>
                        <div class="col-lg-12 text-center p-2">
                            <p>
                                <i class="fas fa-file-pdf fa-2x p-2"> </i><a href="resume_webdev.pdf">
                                    Download my Resume  <i class="fas fa-arrow-alt-circle-down fa-2x"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;