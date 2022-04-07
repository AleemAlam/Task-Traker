import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Header from "../Components/Header";
import TaskList from "../Components/TaskList";
import { addTask, deleteTask, getTask } from "../Network/networkRequest";
import Pusher from "pusher-js";

const Container = styled.div`
  width: 360px;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const BodyContainer = styled.div`
  padding: 10px;
`;
const initInputs = {
  projectName: "",
  taskName: "",
  isBillable: false,
};
export default function TaskTracker() {
  const [inputs, setInputs] = useState(initInputs);
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const payload = {
      ...inputs,
      [name]: name === "isBillable" ? checked : value,
    };
    setInputs(payload);
  };
  const addData = () => {
    getTask()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  };
  const handleDelete = (id) => {
    deleteTask(id)
      .then((res) => {
        addData();
      })
      .catch((err) => console.log(err.message));
  };
  const handleClick = () => {
    if (inputs.projectName.length === 0 || inputs.taskName.length === 0) {
      return;
    }
    addTask(inputs).then((res) => {
      // console.log(res.data);
    });
    setInputs(initInputs);
  };
  useEffect(() => {
    addData();
    const pusher = new Pusher(process.env.REACT_APP_KEY, {
      cluster: process.env.REACT_APP_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (res) => {
      setData((data) => [...data, res]);
    });

    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, []);
  return (
    <Container>
      <Header>Activities</Header>
      <BodyContainer>
        <Form handleChange={handleChange} {...inputs} />
      </BodyContainer>
      <TaskList data={data} handleDelete={handleDelete} />
      <Footer
        top={20}
        clickable={
          inputs.projectName.length > 0 && inputs.taskName.length > 0
            ? true
            : false
        }
        handleClick={handleClick}
      />
    </Container>
  );
}
