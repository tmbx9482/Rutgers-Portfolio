import React from "react";

function Contact() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title" style={{ color: 'whitesmoke' }}>Contact Me</h2>
                            <h5>My Email: troyberentsen94@gmail.com</h5>
                            <br></br>
                            <hr></hr>

                            <form action="mailto:troyberentsen94@gmail.com" method="post" enctype="application/x-www-form-urlencoded">
                                <button type="submit" style={{ float: 'center' }} class="btn btn-danger">Email Me</button>
                                <img src="./assets/imgs/quote.jpg" alt="Saying" style={{ height: "150", width: "250" }} />

                            </form>
                            <br></br>





                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;