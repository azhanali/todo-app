// import React, { Component } from "react";
import React, { useState, useEffect, Component } from 'react';
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import db from "../../config/firebaseConfig";

// class AddTask extends Component {
export default function AddTask(props) {
  // state = {
  //   task: "",
  // };
  const [
    task, setTask
  ] = useState("");

  const handleChange = async (e) => {
    //   this.settask({
    //     [e.target.id]: e.target.value,
    //   });
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    db.collection("tasks").doc().set({
      date: new Date(),
      task: task
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log(task);
  };

  // render() {
  return (
    <>
      <form className="container"
        autoComplete="off"
        style={{ marginTop: "30px" }}
        onSubmit={handleSubmit}
      >
        <legend></legend>
        <div className="form-group">
          <label htmlFor="task">Add a task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
          </button>
      </form>
    </>);
}
// }

// export default AddTask;
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (task) => dispatch(addTask(task)),
//   };
// };

// export default connect(null, mapDispatchToProps)(AddTask);