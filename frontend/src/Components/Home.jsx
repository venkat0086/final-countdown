import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/styles.css";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    showData();
  }, [page]);

  const showData = () => {
    axios
      .get(
        `https://heady-resonant-homburg.glitch.me/teachers?_limit=3&_page=${page}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  const ascSorting = () => {
    axios
      .get(
        `https://heady-resonant-homburg.glitch.me/teachers?_sort=age&_order=asc`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  const maleFilter = () => {
    axios
      .get(
        `https://heady-resonant-homburg.glitch.me/teachers?gender=Male&_limit=3&_page=${page}`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };
  const femaleFilter = () => {
    axios
      .get(
        `https://heady-resonant-homburg.glitch.me/teachers?gender=Female&_limit=3&_page=${page}`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  const descSorting = () => {
    axios
      .get(
        `https://heady-resonant-homburg.glitch.me/teachers?_sort=age&_order=desc`
      )
      .then((res) => {
        setData([...res.data]);
      });
  };

  const deleteItem = (ch) => {
    axios
      .delete(`https://heady-resonant-homburg.glitch.me/teachers/${ch}`)
      .then(() => {
        showData();
      });
  };

  return (
    <div className="main-contain">
      <div className="sort-filter-main">
        <div>
          {"Sort By Age:  "}
          <button
            onClick={() => {
              ascSorting();
            }}
          >
            Low To High
          </button>
          <button
            onClick={() => {
              descSorting();
            }}
          >
            High To Low
          </button>
        </div>
        <div>
          Filter By Gender:
          <button
            onClick={() => {
              maleFilter();
            }}
          >
            Male
          </button>
          <button
            onClick={() => {
              femaleFilter();
            }}
          >
            Female
          </button>
        </div>
      </div>
      <br />
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
      <br />
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Section</th>
              <th>Grade</th>
              <th>Subject</th>
              <th>View</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>
                  {e.classSec.map((e) => (
                    <span key={e.id}>{e.section}</span>
                  ))}
                </td>
                <td>
                  {e.classSec.map((e) => (
                    <span key={e.id}>{e.grade}</span>
                  ))}
                </td>
                <td>
                  {e.classSec.map((e) => (
                    <span key={e.id}>{e.subject}</span>
                  ))}
                </td>
                <td>
                  <button>
                    <Link to={`/teachers/${e.id}`}>View</Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
