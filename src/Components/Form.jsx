import React from "react";
import { Row } from "../Styles/styledComponents";
import LabeledCheckbox from "./LabeledCheckbox";
import LabeledInput from "./LabeledInput";

export default function Form({
  projectName,
  taskName,
  isBillable,
  handleChange,
}) {
  return (
    <>
      <LabeledInput
        required={true}
        placeholder={"E.g. Nike Implementation"}
        top={25}
        bottom={35}
        handleChange={handleChange}
        value={projectName}
        name={"projectName"}
      >
        Project Name
      </LabeledInput>
      <Row right={15} bottom={15}>
        <LabeledInput
          required={true}
          placeholder={"E.g. Kick-off call"}
          handleChange={handleChange}
          value={taskName}
          name={"taskName"}
        >
          Task Name
        </LabeledInput>
        <LabeledCheckbox
          handleChange={handleChange}
          checked={isBillable}
          name={"isBillable"}
        >
          Billable
        </LabeledCheckbox>
      </Row>
      <br />
    </>
  );
}
