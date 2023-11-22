import "./App.css";
import General from "./Components/General";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [educations, setEducations] = useState([]);

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
        <Education education={educations} setEducation={setEducations} />
        <Experience />
      </div>
      <div className="mainCV">
        <Main name={name} email={email} phone={phone} address={address} />
      </div>
    </>
  );
}

export default App;
