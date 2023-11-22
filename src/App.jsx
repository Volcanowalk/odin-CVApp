import "./App.css";
import General from "./Components/General/General";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience";
import Main from "./Components/Main";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [educations, setEducations] = useState(initial_education);

  return (
    <>
      <div className="sidebar">
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
        <Experience />
      </div>
      <div className="mainCV">
        <Main name={name} email={email} phone={phone} address={address} />
      </div>
    </>
  );
}

export default App;
