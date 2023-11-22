import { useState } from "react"

export default function EducationForm() {
    const [school, setSchool] = useState("")
    const [study, setStudy] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    return (
        <div className="form-education">
                <label htmlFor="input-school">School Name:</label>
                <input id="input-school" type="text" value={school} onChange={(e) => setSchool(e.target.value)}/>
                <label htmlFor="input-study">Study Title:</label>
                <input type="text" id="input-study" value={study} onChange={(e) => setStudy(e.target.value)} />
                <label htmlFor="input-start">Start Date:</label>
                <input type="text" id="input-start" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <label htmlFor="input-end">End Date:</label>
                <input type="text" id="input-end" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
    )
}