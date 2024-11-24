import photo from './yuvan.png';

function About() {
    return (
        <><br />
            <div className="container shadow-none p-3 mb-5 bg-light rounded border">
                <h1 class='text-center p-3 about shadow-none p-3 mb-5 bg-light rounded border'>A<span class='s-color'>b</span>o<span class='s-color'>u</span>t...!</h1>
                <div class="container">
                    <div class="row">
                        <div class="col">
                           <div className="container-img">
                            <img src={photo} alt="" />
                           </div>
                        </div>
                        <div class="col">
                            <div className="about-box p-5 fs-3">
                                <p class='p-3'>IT graduate skilled in Java, HTML, CSS, JavaScript, React, and MySQL. Passionate about web development, currently working on projects to enhance my skills, and seeking an entry-level role to contribute and grow.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
          
        </>
    )
}
export default About;