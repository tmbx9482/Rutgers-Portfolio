import React from "react";

function About() {
    return (
        <div className="container">
            <div className="row" />
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Troy Berentsen</h1>
                    </div>
                    <div className="row p-3">
                        <div className="col-sm-8">
                            <img src="./assets/imgs/Troy.jpg" alt="Profile Pic" />
                            <h3>About Me</h3>
                            <p>Full Stack Developer with a business, analytical, and technology mindset whose effective,
                            results-driven,
                                and ambitious to seek new challenges, solve company problems and meet deadlines. </p>
                            <p>I’ve consulted/researched for 10 years in the digital revolution world; revolving around
                                office equipment, mobile, and computers. </p>
                            <p>I graduated with a bachelors in business having a concentration in marketing &
                            management, in knowing that I will have a business someday after taking on more
                            practices in this setting and learn more about the computer industry. A professor once
                                told me <i>“Whatever got you to your current level of success, isn’t good enough to keep
                                    you there”</i> which is why I am currently studying at Rutgers taking a Full Stack
                                Flex Bootcamp working on projects and coding. After school my desired role I am gearing
                                towards is “Product Manager”, to be the front-line of when products launch and going
                                behind the scenes as a strategist is my dream goal. Moreover, understanding the core
                                values of the coding fundamentals is key towards my successes in this program.</p> <br>
                                <p> Afterwards, I want to dive into “Application Development Manager” to understand both
                                sides of the spectrum of computers and business then have the end goal as a Web
                                Producer.</p>
                            </br>
                        </div>

                        <div className="col-sm-4">
                            <h4>My Soical Media's of Work Content:</h4>
                            <img className="social-media" src="./assets/imgs/github.png" alt="GitHub" />
                            <a href="https://github.com/tmbx9482" target="_blank" rel="noreferrer">GitHub</a>
                            <p></p>
                            <img className="social-media" src="./assets/imgs/linkedin.png" alt="LinkedIn" />
                            <a href="https://www.linkedin.com/in/berentsen94/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <p></p>
                            <img className="social-media" src="./assets/imgs/resume.png" alt="Resume" />
                            <a href="https://docs.google.com/document/d/1fRKfox_KwE1ICDeVaApVjtGNlP4Y7pU2FE6GyefFkdo/edit?usp=sharing" target="_blank" rel="noreferrer">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;