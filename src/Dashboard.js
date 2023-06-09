import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "./config";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [students,setStudents] = useState([])
  let getData = async () => {
   let res= await axios.get(`${config.api}/dashboard`,{
    headers:{
      'Authorization' : `${localStorage.getItem('react_app_token')}`
    }
   });
    setStudents(res.data)
    console.log(students)

  };
  useEffect(() => {
    getData();

  }, []);

  let navigate = useNavigate()
//  getData();
//   console.log(students)
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    onSubmit: async (values) => {
      const data = await axios.post(`${config.api}/dashboard`, values ,{
        headers:{
          'Authorization' : `${localStorage.getItem('react_app_token')}`
        }
       });
      alert(data.data.message);
      getData();
    },
  });

  let doLogout = () => {
    localStorage.removeItem('react_app_token');
    navigate('/')

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="btn btn-warning" onClick={doLogout}>Logout</div>
          <div className="col">
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <tr>
                      <th scope="row">{student._id}</th>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;