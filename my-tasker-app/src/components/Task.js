import React from "react";

function Task(){
    return(
        <div className="taskCard">
            <h2>Star</h2>
            <p>task</p>
            <p>category</p>
            <p>status</p>
            <button className="completeButton">Check Mark</button>
            <button className="editButton">Edit</button>
            <button className="deleteButton">X</button>
        </div>
    )
}

export default Task