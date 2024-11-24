function Skills() {
    return (
        <><br />
            <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded">
                <h1>S<span class='s-color'>kil</span>ls<span class='s-color'>!</span></h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero, itaque optio, omnis possimus ad vel suscipit totam consectetur consequuntur odit, tenetur enim in error. Velit amet sapiente veniam eius.</p>
            </div>
            <div className="skills-box">
                <div class="container">
                    <div class="row row-cols-2 p-4 fs-3 shadow-lg p-3 mb-5 bg-body rounded">
                        <div class="col p-4"><i class="fa-brands fa-html5"></i> HTML <div class="progress">
                            <div class="progress-bar w-50" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-css3-alt"></i> CSS<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-bootstrap"></i> Bootstrap<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-js"></i> JavaScript<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-react"></i> React<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-java"></i> Java<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-solid fa-database"></i> MySql<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                        <div class="col p-4"><i class="fa-brands fa-github"></i> GitHub<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;