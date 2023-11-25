import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ExperienceForm({
  experience,
  handleAdd,
  handleDelete,
  handleEdit,
}) {
  let initial_company = "";
  let initial_position = "";
  let initial_res = "";
  let initial_start = "";
  let initial_end = "";

  if (experience) {
    initial_company = experience.company;
    initial_position = experience.position;
    initial_res = experience.responsibility;
    initial_start = experience.start;
    initial_end = experience.end;
  }

  const [input, setInput] = useState({
    company: initial_company,
    position: initial_position,
    responsibility: initial_res,
    start: initial_start,
    end: initial_end,
  });

  const handleInput = (inputIdentifier, value) => {
    setInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: value };
    });
  };

  const onClickAdd = () => {
    const newData = { ...input, id: uuid() };
    handleAdd(newData);
  };

  const onClickDelete = () => {
    handleDelete(experience.id);
  };

  const onClickEdit = () => {
    handleEdit({ ...input, id: experience.id });
  };

  return (
    <div className="form-experience">
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        value={input.company}
        onChange={(e) => {
          handleInput("company", e.target.value);
        }}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        value={input.position}
        onChange={(e) => {
          handleInput("position", e.target.value);
        }}
      />
      <label htmlFor="resposibility">Responsibilities:</label>
      <textarea
        id="responsibility"
        cols="20"
        rows="5"
        value={input.responsibility}
        onChange={(e) => {
          handleInput("responsibility", e.target.value);
        }}
      ></textarea>
      <label htmlFor="start">Start Date:</label>
      <input
        type="text"
        id="start"
        value={input.start}
        onChange={(e) => {
          handleInput("start", e.target.value);
        }}
      />
      <label htmlFor="end">End Date:</label>
      <input
        type="text"
        id="end"
        value={input.end}
        onChange={(e) => {
          handleInput("end", e.target.value);
        }}
      />
      {experience && <button onClick={onClickEdit}>Edit</button>}
      {experience && <button onClick={onClickDelete}>Delete</button>}
      {!experience && <button onClick={onClickAdd}>Add</button>}
    </div>
  );
}
