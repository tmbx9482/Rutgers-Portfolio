import React from "react";

function Contact() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10" />
                <div class="card" />
                <div class="card-body" />
                <h2 class="card-title">Contact Me</h2>
                <h5>My Email: troyberentsen94@gmail.com</h5>
                <br></br>

                <form action="mailto:troyberentsen94@gmail.com" method="post" enctype="application/x-www-form-urlencoded">
                    <button type="submit" class="btn btn-primary">Email Me</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;