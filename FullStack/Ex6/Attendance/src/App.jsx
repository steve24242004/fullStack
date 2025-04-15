import React, { useState } from "react";

const studentsList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function AttendanceApp() {
  const [students, setStudents] = useState(
    studentsList.map((student) => ({ ...student, status: "Absent" }))
  );

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "Present" ? "Absent" : "Present" } : s
      )
    );
  };

  const attendancePercentage =
    (students.filter((s) => s.status === "Present").length / students.length) * 100;

  return (
    <div>
      <h2>Student Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.status}
            <button onClick={() => toggleAttendance(student.id)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
      <h3>Attendance Percentage: {attendancePercentage.toFixed(2)}%</h3>
    </div>
  );
}

export default AttendanceApp;
