import React from "react";
import Task from "./Task";

function TaskList (){
    return(
        <div className="taskList">
            <table>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </table>
            <Task />
        </div>
    )
}

export default TaskList