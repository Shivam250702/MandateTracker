import React, { useState } from "react";
import Form2 from "../Components/Form2";
import Preview from "../Components/Preview";
import FormComponent from "../Components/Form3";
import Footer from "./Footer";
const Home = () => {
  const [company, setCompany] = useState("");
  const [currentDate, setCurrentDate] = useState(Date.now());
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState({
    tof: "",
    lt: "",
    t: "",
    d: 0,
    r: [],
  });
  const [lenders, setLenders] = useState(0);

  return (
    <div>
    <div style={{ display: "flex" }}>
      <div style={{ flex: "row", marginRight: "550px" }}>
        <Form2
          company={company}
          setCompany={setCompany}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          data={data}
          setData={setData}
          rowData={rowData}
          setRowData={setRowData}
          lenders={lenders}
          setLenders={setLenders}
        />
        <FormComponent/>

        
      </div>
      <div style={{ flex: 1 ,border:"3px solid black" }}>
        <Preview
          company={company}
          currentDate={currentDate}
          data={data}
          lenders={lenders}
        />
      </div>

    </div>
    <Footer/>
    </div>
    
  );
};

export default Home;
