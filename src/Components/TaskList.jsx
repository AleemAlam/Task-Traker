import React from "react";
import { StyledText } from "../Styles/styledComponents";
import TaskItem from "./TaskItem";
export default function TaskList({ data, handleDelete }) {
  return (
    <>
      <StyledText size={14} bold={true} left={10} bottom={10}>
        Team Task
      </StyledText>
      {data.map((task) => (
        <TaskItem key={task.id} {...task} handleDelete={handleDelete} />
      ))}
      {/* 
      <TaskItem
        company="H&M Campaign for environment"
        task="Meeting with H&M"
        billable={true}
      />
      <TaskItem
        company="H&M Campaign for environment"
        task="Meeting with H&M"
      />
      <TaskItem
        company="H&M Campaign for environment"
        task="Meeting with H&M"
        billable={true}
      />
      <TaskItem
        company="H&M Campaign for environment"
        task="Meeting with H&M"
      /> */}
    </>
  );
}
