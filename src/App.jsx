import "./App.css";
import General from "./Components/General/General";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Main from "./Components/Main/Main";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const initial_education = [
    {
      id: uuid(),
      school: "School of React",
      study: "React programming",
      start: "11 / 2023",
      end: "12 / 2023",
    },
  ];

  const [name, setName] = useState("React User");
  const [email, setEmail] = useState("test@react.ca");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("React Land");
  const [educations, setEducations] = useState(initial_education);
  const [experiences, setExperiences] = useState([
    {
      id: uuid(),
      company: "React Company",
      position: "React Developer",
      responsibility: "Develop website with React",
      start: "12 / 2023",
      end: "Present",
    },
  ]);

  const handleClear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setEducations([]);
    setExperiences([]);
  };

  return (
    <>
      <div className="sidebar">
        <button className="btnClear" onClick={handleClear}>
          <DeleteIcon />
          CLEAR CONTENT
        </button>
        <General
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
        />
        <Education educations={educations} setEducations={setEducations} />
        <Experience experiences={experiences} setExperiences={setExperiences} />
      </div>
      <div className="mainCV">
        <Main
          name={name}
          email={email}
          phone={phone}
          address={address}
          educations={educations}
          experiences={experiences}
        />
      </div>
    </>
  );
}

export default App;
