import React from "react";

function ContactTitle(){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0">
            <span className="title-line w-100 bg-primary"></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Contact Me!</h2>
            <span className="title-line w-100 bg-primary"></span>
        </div>
    )
}

function ProjectsTitle(){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0 projects-title">
            <span className="title-line w-100 bg-primary"></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Projects</h2>
            <span className="title-line w-100 bg-primary"></span>
        </div>
    )
}

export {ContactTitle, ProjectsTitle};
