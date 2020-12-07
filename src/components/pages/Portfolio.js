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
                            <h2 class="card-title">Bootcamp Projects</h2>
                            <h5>*Whatever got you to your current level of succes isn't good enough to keep you there.*</h5>


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
                                imageSource="assets/imgs/Dino.png" height="150" width="250"
                                altLabel="ConcertHunt"
                                header="Group Project Name: Dino Dynasty"
                                description="A roguelike game made with creating an application using Titles Mapp, Phaser 3 and data capturing MongoDB."
                                deployedLink="Coming Soon"
                                githubLink="https://github.com/KilometersDodecahedron/Dino-Dynasty"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;