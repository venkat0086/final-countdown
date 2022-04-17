import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "../Styles/styles.css";

export const TeachersDetails = () => {
  const { teacherId } = useParams();

  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    axios
      .get(`https://heady-resonant-homburg.glitch.me/teachers/${teacherId}`)
      .then((res) => {
        setTeacher(res.data);
      });
  }, []);

  return (
    <div>
      <img src={"https://i.pravatar.cc/300"} alt="img" />
      <div className="teacher-Details">
        <div>Name: {teacher.name}</div>
        <div>Age: {teacher.age}</div>
        <div>Gender: {teacher.gender}</div>
        {/* <div>
          {teacher.classSec.map((e) => (
            <div key={e.id}>
              <div>Grade: {e.grade}</div>
              <div>Section: {e.section}</div>
              <div>Subject: {e.subject}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
