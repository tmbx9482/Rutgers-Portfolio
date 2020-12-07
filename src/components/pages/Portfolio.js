import React from "react";
import Project from '../Project';

function Portfolio() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title" style={{ color: 'whitesmoke' }}>Bootcamp Projects</h2>


                            <Project
                                imageSource="assets/imgs/Note.jpg" height="150" width="250"
                                altLabel="Music App"
                                header="Group Project Name: NoteDrop"
                                description="Once searched, an artist will deploy by returning top 10 songs from the artist, lyrics and any concert information; if available."
                                deployedLink="https://tmbx9482.github.io/N0teDr0p/"
                                githubLink="https://github.com/tmbx9482/N0teDr0p"
                            />

                            <Project
                                imageSource="assets/imgs/Rogueblitz.png" height="150" width="250"
                                altLabel="2D Video Game"
                                header="Group Project Name: RogueBlitz"
                                description="A roguelike game made with creating an application using MySQL, Node, Espress, Handlebars and create an ORM."
                                deployedLink="https://rogueblitzgaming.herokuapp.com/"
                                githubLink="https://github.com/KilometersDodecahedron/RogueBlitz"
                            />

                            <Project
                                imageSource="assets/imgs/notet.gif" height="150" width="250"
                                altLabel="Take Notes"
                                header=" Project Name: Note Taker"
                                description="Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file."
                                deployedLink="https://morning-chamber-77571.herokuapp.com/"
                                githubLink="https://github.com/tmbx9482/Note-Taker"
                            />

                            <Project
                                imageSource="assets/imgs/fitness.png" height="150" width="250"
                                altLabel="Get Fit!"
                                header=" Project Name: Fitness Tracker"
                                description="View, create, and track your daily workouts and log multiple exercises by saving to a Mongo db with a Mongoose schema."
                                deployedLink="https://intense-brook-68913.herokuapp.com/"
                                githubLink="https://github.com/tmbx9482/Workout-Tracker"
                            />

                            <Project
                                imageSource="assets/imgs/Dino.png" height="150" width="250"
                                altLabel="Dino"
                                header="Group Project Name: Dino Dynasty"
                                description="A roguelike game made with creating an application using Titles Mapp, Phaser 3 and data capturing MongoDB."
                                deployedLink="Coming Soon"
                                githubLink="https://github.com/KilometersDodecahedron/Dino-Dynasty"
                            />

                            <Project
                                imageSource="assets/imgs/Titans.png" height="150" width="250"
                                altLabel="Team"
                                header=" Project Name: Team-Profile-Generator"
                                description="Generate your new team based on information provided A CLI App using Inquirer and TDD with Jest."
                                deployedLink="https://github.com/tmbx9482/Team-Profile-Generator"
                                githubLink="https://github.com/tmbx9482/Team-Profile-Generator"
                            />

                            <Project
                                imageSource="assets/imgs/plan.jpg" height="150" width="250"
                                altLabel="Planner"
                                header=" Project Name: Work Day Planner"
                                description="A work day calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
                                deployedLink="https://tmbx9482.github.io/Work-Day-Planner/"
                                githubLink="https://github.com/tmbx9482/Work-Day-Planner"
                            />

                            <Project
                                imageSource="assets/imgs/Money.png" height="150" width="250"
                                altLabel="Money"
                                header=" Project Name: Budget Tracker"
                                description="Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success."
                                deployedLink="https://budgeting-money-777.herokuapp.com/"
                                githubLink="https://github.com/tmbx9482/Budget_Now"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;