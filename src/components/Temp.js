import React, { useState, useEffect } from 'react';
import db from "../config/firebaseConfig";
import AddTask from "../components/tasks/AddTask";
import Task from "./tasks/Task";
import Tasks from "./tasks/Tasks";

export default function Tempdisplay(props) {
  const [
    task, setTask
  ] = useState();
  useEffect(() => {
    return db
      .collection("tasks")
      .orderBy("date", "asc")
      .onSnapshot((snapshot) => {
        const postData = [];
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
        setTask(postData);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    db.collection("tasks").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    console.log("deleted");
  }

  return (
    <div>
      <AddTask />
      <div style={{marginRight:"17%", marginLeft:"17%"}}>
        <table
          class="table table-dark table-hover containe"
          style={{ marginTop: "30px"}}
        >
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Date</th>
              <th scope="col">Check</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {task &&
              task.map((blog) => {
                return (
                  <tr>
                    <th>{blog.task}</th>
                    <th>
                      <td style={{margin:'10%'}}>{new Date(blog.date.seconds * 1000).toLocaleDateString("en-US")}</td>
                    </th>
                    <th>
                      <td>
                        <span className="material-icons" style={{ cursor: "pointer" }}>check_circle</span>
                      </td>
                    </th>
                    <th>
                      <td>
                        <span className="material-icons text-danger" style={{ cursor: "pointer" }} onClick={() => handleDelete(blog.id)}>delete</span>
                        {/* <button onClick={()=>handleDelete(blog.id)}>delete</button> */}
                      </td>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
