import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from 'axios';



function App() {


  

  const[data,setdata]=useState([])
  const [values, setvalues] = useState({
    name: "",
    email: "",
    mobile: "",
    zipcode: "",
    Adress: "",
    password: "",
    counrty: "",
    state: "",
    city: "",
  });

  const handlechanges = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  async function handlefn(e) {
    e.preventDefault()
   
    try {
      const response = await axios.post("http://localhost:3000/post", values);
      
     
    } catch (error) {
      console.log(error);
    }
      console.log(values)
   
  }

  useEffect(() => {
    const getapi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log(response.data);  
        setdata(response.data);      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getapi();
  }, []);
  data.forEach((val)=>{
    console.log(val.name)
  })
  


  return (
    <>
      <div className="container">
        <div className="contest-box">
          <form onSubmit={handlefn}>
            <div className="contestbox1">
              <span id="names">Name</span>
              <span className="ns">:</span>
              <input
                className="name"
                minLength={10}
                type="text"
                placeholder="name"
                name="name"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />
            </div>

            <div className="contexbox2">
              {" "}
              <span id="emails">Email </span>
              <span className="es">:</span>{" "}
              <input
                className="email"
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />
            </div>

            <div className="contexbox3">
              {" "}
              <span id="mobiles">Mobile</span>
              <span className="ms">:</span>{" "}
              <input
                className="mobile"
                type="tel"
                minLength={10}
                maxLength={10}
                placeholder="Mobile"
                name="mobile"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />{" "}
            </div>

            <div className="contextbox4">
              {" "}
              <span id="zipcodes">Zipcode</span>
              <span className="zs">:</span>{" "}
              <input
                className="zipcode"
                type="text"
                placeholder="Zipcode"
                name="zipcode"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />
            </div>

            <div className="contexbox5">
              {" "}
              <span id="address">Adress</span>
              <span className="as">:</span>{" "}
              <input
                type="address"
                className="add"
                placeholder="Current-Adress"
                name="Adress"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />
            </div>
            <div className="contextbox6">
              {" "}
              <span id="passwords">password</span>
              <span className="ps">:</span>{" "}
              <input
                className="pass"
                maxLength={7}
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              />
            </div>

            <div className="context-box7">
              <span id="country">
                Country<span className="countrys">:</span>
              </span>
              <select
                id="countryname"
                name="counrty"
                onChange={(e) => {
                  handlechanges(e);
                }}
                required
              >
                <option id="val" value="india">
                  india
                </option>
                <option id="val" value="south-africa">
                  South-africa
                </option>
                <option id="val" value="Australia">
                  Australia
                </option>
                <option id="val" value="America">
                  America
                </option>
              </select>
            </div>

            <span id="state">
              State<span className="states">:</span>
            </span>
            <select
              id="statename"
              name="state"
              onChange={(e) => {
                handlechanges(e);
              }}
              required
            >
              <option id="val" value="madhya pradesh">
                madhya pradesh
              </option>
              <option id="val" value="rajsthan">
                rajsthan
              </option>
              <option id="val" value="punjab">
                punjab
              </option>
              <option id="val" value="chandigrah">
                chandigrah
              </option>
            </select>
            <br />

            <span id="city">
              City <span className="citys">:</span>
            </span>
            <select
              id="cityname"
              name="city"
              onChange={(e) => {
                handlechanges(e);
              }}
              required
            >
              <option id="val" value="bhopal">
                Bhopal
              </option>
              <option id="val" value="dewas">
                Dewas
              </option>
              <option id="val" value="agra">
                Agra
              </option>
              <option id="val" value="bakani">
                Bakani
              </option>
            </select>

            <br />

            <input id="sd" type="submit" />
            
          </form>
        </div>
      </div>
      
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Zipcode</th>
          <th>Adress</th>
          <th>Password</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>

        </tr>
        <tbody>
          {
            data.map((element,indx)=>{
              console.log(element.mobile);
              return(
                <>
                <tr key={indx}>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.mobile}</td>
                <td>{element.zipcode}</td>
                <td>{element.Adress}</td>
                <td>{element.password}</td>
                <td>{element.city}</td>
                <td>{element.state}</td>
                <td>{element.counrty}</td>

              </tr>
                </>
              )
              
            })
          }
        </tbody>
      </thead>
     </table>

      
    </>
  );
}

export default App;

