import React from 'react';
import Task from './Task';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = () => {
  return (
    <>
      <table
        className="table table-dark table-hover container"
        style={{marginTop: "30px"}}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Tasks</th>
            <th scope="col">Added</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Task/>
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);