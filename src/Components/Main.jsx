import "../styles/Main.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";

function Main({ name, email, phone, address }) {
  return (
    <div className="CV">
      <div className="cv-header">
        <h1>{name}</h1>
        <EmailIcon /> {email}
        <PhoneAndroidIcon /> {phone}
        <HomeIcon /> {address}
      </div>
      <div className="cv-education-header">Education</div>
      <div className="cv-education"></div>
    </div>
  );
}

export default Main;
