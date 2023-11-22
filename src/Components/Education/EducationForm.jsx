import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EducationForm({
  education,
  addEducation,
  deleteEducation,
  editEducation,
}) {
  //Initial values
  let txtSchool = "";
  let txtStudy = "";
  let txtStart = "";
  let txtEnd = "";
  if (education) {
    txtSchool = education.school;
    txtStudy = education.study;
    txtStart = education.start;
    txtEnd = education.end;
  }

  //State variables
  const [school, setSchool] = useState(txtSchool);
  const [study, setStudy] = useState(txtStudy);
  const [startDate, setStartDate] = useState(txtStart);
  const [endDate, setEndDate] = useState(txtEnd);

  //Add button handler
  const handleAdd = () => {
    let newEducation = {
      id: uuid(),
      school: school,
      study: study,
      start: startDate,
      end: endDate,
    };
    addEducation(newEducation);
  };

  //Delete button handler
  const handleDelete = () => {
    deleteEducation(education.id);
  };

  const handleEdit = () => {
    education.school = school;
    education.study = study;
    education.start = startDate;
    education.end = endDate;
    editEducation(education);
  };

  return (
    <div className="form-education">
      <label htmlFor="input-school">School Name:</label>
      <input
        id="input-school"
        type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="input-study">Study Title:</label>
      <input
        type="text"
        id="input-study"
        value={study}
        onChange={(e) => setStudy(e.target.value)}
      />
      <label htmlFor="input-start">Start Date:</label>
      <input
        type="text"
        id="input-start"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="input-end">End Date:</label>
      <input
        type="text"
        id="input-end"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      {education && <button onClick={handleEdit}>Edit</button>}
      {education && <button onClick={handleDelete}>Delete</button>}
      {!education && <button onClick={handleAdd}>Add</button>}
    </div>
  );
}
