import React from "react";

function ContactTitle(props){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0">
            <span className="title-line w-100 bg-primary"></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">{props.title}</h2>
            <span className="title-line w-100 bg-primary"></span>
        </div>
    )
}
