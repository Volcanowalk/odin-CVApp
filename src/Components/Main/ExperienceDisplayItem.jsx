export default function ExperienceDisplayItem({ experience }) {
  return (
    <div className="display-experience">
      <div className="display-experience-date">
        {experience.start} - {experience.end}
      </div>
      <div>
        <b>{experience.position}</b> <br />
        <i>{experience.company}</i> <br />
        {experience.responsibility}
      </div>
    </div>
  );
}
