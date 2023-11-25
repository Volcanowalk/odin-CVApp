import "../../styles/Main.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import EducationDisplayItem from "./EducationDisplayItem";
import ExperienceDisplayItem from "./ExperienceDisplayItem";

function Main({ name, email, phone, address, educations, experiences }) {
  return (
    <div className="CV">
      <div className="cv-header">
        <h1>{name}</h1>
        <EmailIcon /> {email}
        <PhoneAndroidIcon /> {phone}
        <HomeIcon /> {address}
      </div>
      <div className="cv-section-header">Education</div>
      <div className="cv-education">
        {educations.map((education) => (
          <EducationDisplayItem key={education.id} education={education} />
        ))}
      </div>
      <div className="cv-section-header">Experience</div>
      <div className="cv-experience">
        {experiences.map((experience) => (
          <ExperienceDisplayItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Main;
