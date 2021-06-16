import React from "react";

function Project() {
    return (
        <div class="container">
            <section class="row p-3">
                <div class="col-lg-12">
                    <h3 class="p-3">
                        The Gallery
                    </h3>
                </div>
                <div class="row align-items-center p-2">
                    <div class="col-lg-4 col-sm-12 text-center p-2">
                        <h5 class="text-center p-2 align-items-center">
                            Wanderlost
                        </h5>
                        <a href="https://dracon75.github.io/Project-1/" target="_blank">
                            <img src="wanderlost.jpg" class="img-fluid float-start p-1 glow" id="wander"></img></a>
                        <figcaption>
                            <p class="text-center p-2">Michigan hiking trail locator that provides basic trail
                                info and current weather.</p>
                            <a href="https://github.com/RevyWatson/wanderlost" target="_blank"><i
                                class="fab fa-github fa-2x p-1"></i>View the inner workings!</a>
                        </figcaption>
                    </div>
                    <div class="col-lg-4 col-sm-12 text-center p-2">
                        <h5 class="text-center p-2">
                            Work Day Scheduler
                        </h5>
                        <a href="https://revywatson.github.io/work-day-scheduler/" target="_blank">
                            <img src="workdayscheduler.png" class="img-fluid text-center p-1 glow" id="scheduler"></img></a>
                        <figcaption>
                            <p class="text-center p-2">Event planning application to help organize a user's work schedule for the current day. Linked to current local date and time.</p>
                            <a href="https://github.com/RevyWatson/work-day-scheduler" target="_blank">
                                <i class="fab fa-github fa-2x p-1"></i>See whats inside!</a>
                        </figcaption>
                    </div>
                    <div class="col-lg-4 col-sm-12 text-center p-2">
                        <h5 class="text-center p-2">
                            Password Generator
                        </h5>
                        <a href="https://revywatson.github.io/password_generator/" target="_blank">
                            <img src="passwordgenerator.png" class="img-fluid float-end p-1 glow" id="password"></img></a>
                        <figcaption>
                            <p class="text-center p-2">Designed to generate a password that allows the user to specify
                                parameters such as length and types of characters.</p>
                            <a href="https://github.com/RevyWatson/password_generator" target="_blank"><i
                                class="fab fa-github fa-2x p-1"></i>Look under the hood!</a>
                        </figcaption>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Project;