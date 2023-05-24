import React from "react";

const Home = () => {
    return (
    <header>
        <div class="main-header">
            {/* <img src="./assets/images/header-image.jpg" /> */}
            <h1>COREY CALBREATH</h1>
            <h2>Web Developer</h2>
        </div>
        <nav>
            <ul class="main-nav">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>

        <main>
                <aside class="subtitle">
                    <h2>WELCOME TO MY PORTFOLIO PAGE!</h2>
                </aside>
                
                <section id="about-me">
                    <h3>About Me</h3>
                    <figure>
                        {/* <img src="./assets/images/profile-pic.jpg" alt="A photo image of myself (Corey Calbreath)"> */}
                    </figure>
                    <p>Hello! My name is Corey Calbreath. I was born and raised in Austin, Texas. I am 28 years old and I currently work as a licensed plumber. I am working on a front end web development techdegree from Team Treehouse, as well as attending the University of Texas full stack coding bootcamp in hopes of making a career change. Check out some of my projects below, or visit my github profile by clicking the github icon at the bottom of this page to check out all of my projects!</p>
                </section>
                
                <section id="projects">
                    <h3>Projects</h3>
                    <div class="proj projects-container">
                        <figure class="proj">
                            <p><b>MY RESUME PAGE</b> | HTML & CSS</p>
                            {/* <a href="#"><img src="./assets/images/resume-placeholder.jpg" alt="placeholder image of resume until I get my personal Resume page up"></a> */}
                        </figure>

                        <figure class="proj">
                            <p><b>NIXED REVIEWS APP</b> | HTML CSS & JavaScript</p>
                            {/* <a href="https://coreydc.github.io/Nixed-Reviews/"><img src="./assets/images/nixed-reviews.jpg" alt="screenshot image of Nixed reviews website project from UT bootcamp"></a> */}
                        </figure>

                        <figure class="proj"> 
                            <p><b>NICK CAGE ARCADE APP</b> | HTML, CSS, JavaScript & Node.js</p>
                            {/* <a href="https://nic-tac-toe.herokuapp.com/login"><img src="./assets/images/Nick Cage Arcade.png" alt="screenshot image of the module 1 refactor project from UT coding bootcamp"></a>
                        </figure> }

                        <figure class="proj">
                            <p><b>PHOTO GALLERY</b> | HTML CSS & JavaScript</p>
                            {/* <a href="https://coreydc.github.io/treehouse-photo-gallery-project-5/"><img src="./assets/images/photo-gallery.JPG" alt="screenshot image of photo gallery project from treehouse"></a> */}
                        </figure>
                    </div>
                </section>

                <section id="contact">
                    <h3>Contact Me</h3>
                    <div class="contact-container">
                        <ul class="contact-info">
                            <li><b>EMAIL:</b><i><a class="email" href="mailto:corey_calbreath@yahoo.com?subject=hi%20there!"> corey_calbreath@yahoo.com</a></i></li>
                            <li><b>PHONE:</b> <a href="tel:+5125894002">512-589-4002</a></li>
                        </ul>
                        <figure class="logos">
                            {/* <a href="https://github.com/CoreyDC"><img src="./assets/images/github-icon.jpg" alt="image of github logo"></a> */}
                            {/* <a href="https://www.linkedin.com/in/corey-calbreath-838845235/"><img src="./assets/images/linkdin-logo.jpg" alt="image of linkdin logo"></a>
                            <a href="https://www.instagram.com/corey_calbreath/"><img src="./assets/images/instagram-logo.jpg" alt="image of instagram logo"></a>
                            <a href="https://twitter.com/CoreyDC20"><img src="./assets/images/twitter-logo.jpg" alt="image of twitter logo"></a> */}
                        </figure>
                    </div>
                </section>
                
            </main>
    </header>

    
    );
}

export default Home;