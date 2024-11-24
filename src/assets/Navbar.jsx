import { Link, Route, Routes } from "react-router-dom";

import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Conatct";



function Navbar() {
    return (
        <>
            <div className="container ">
                <nav>
                    <div class="container text-center border border-3 rounded-1 ">
                        <div class="row container-nav p-5">
                            <div class="col text-start">
                                <h1>YUVAN <samp class='s-color'>SHANKAR!</samp></h1>
                            </div>
                            <div class="col ">
                                <ul class="nav justify-content-end">
                                   
                                    <li><Link class="nav-link active" to='/'>About</Link></li>
                                    <li><Link class="nav-link active" to='/skills'>Skills</Link></li>
                                    <li><Link class="nav-link active" to='/project'>Project</Link></li>
                                    <li><Link class="nav-link active" to='/contact'>Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
                <Routes>
                    
                    <Route path="/" element={<About/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/project" element={<Project/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>

        </>
    )
}
export default Navbar;