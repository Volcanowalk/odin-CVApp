export default function EducationDisplayItem({ education }) {
  return (
    <div className="display-education">
      <div className="display-study">
        {education.start} - {education.end}
      </div>
      <div>
        {education.school} <br />
        {education.study}
      </div>
    </div>
  );
}
