import { useEffect, useReducer, useState } from "react";
import { getTeacherData } from "../Redux/Teacher/action";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/styles.css";
const initstate = {
  name: "",
  age: "",
  gender: "",
  classSec: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_NAME":
      return { ...state, name: payload };
    case "UPDATE_AGE":
      return { ...state, age: payload };
    case "UPDATE_GENDER":
      return { ...state, gender: payload };
    case "ADD_CLASS":
      return { ...state, classSec: [...state.classSec, payload] };
    case "RESET_FORM":
      return { ...initstate };
    default:
      throw new Error("Something Went Wrong.!");
  }
};

export const TeachersCreate = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const reduxdispatch = useDispatch();
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const { name, age, gender, classSec } = state;

  const createForm = () => {
    const details = { ...state };
    fetch(" https://heady-resonant-homburg.glitch.me/teachers", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => reduxdispatch(getTeacherData))
      .then(() => dispatch({ type: "RESET_FORM" }));
  };

  return (
    <div className="main_container">
      <div className="title">
        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Name"
            name=""
            id=""
            value={name}
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) =>
              dispatch({ type: "UPDATE_AGE", payload: e.target.value })
            }
          />
        </div>
        <h4>Choose Gender</h4>
        <div className="radio">
          <input
            type="radio"
            checked={gender === "Male"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Male" })
            }
          />
          <label>Male</label>
          <br />
          <input
            type="radio"
            checked={gender === "Female"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Female" })
            }
          />
          <label>Female</label>
          <br />
          <input
            type="radio"
            checked={gender === "Other"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: "Other" })
            }
          />
          <label>Other</label>
        </div>
      </div>

      {/* class */}
      <div>
        <h4>Add Class Details</h4>
        <div className="add_btn_div">
          <div>
            <input
              type="text"
              placeholder="Add Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn"
              onClick={() => {
                const payload = {
                  id: Math.random(),
                  grade: grade,
                  section: section,
                  subject: subject,
                };
                dispatch({ type: "ADD_CLASS", payload });
                setSubject("");
                setGrade("");
                setSection("");
              }}
            >
              ADD
            </button>
          </div>
        </div>
        <div>
          {classSec.map((el) => (
            <div key={el.id}>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>{el.section}</td>
                      <td>{el.grade}</td>
                      <td>{el.subject}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="btn" onClick={createForm}>
          Add Teacher
        </button>
      </div>
    </div>
  );
};
