import React, { useState } from "react";
import './Form2.css'
const Form2 = ({
  company,
  setCompany,
  currentDate,
  setCurrentDate,
  data,
  setData,
  rowData,
  setRowData,
  lenders,
  setLenders,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRowData((prevData) => ({
      ...prevData,
      [name]: value,
      // Reset r to an empty array when lt is changed
      r: name === "lt" ? [] : prevData.r,
    }));
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const handleLenderChange = (e) => {
    setLenders(e.target.value);
  };

  const handleRChange = (index, value) => {
    setRowData((prevData) => ({
      ...prevData,
      r: [...prevData.r.slice(0, index), value, ...prevData.r.slice(index + 1)],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (Object.values(rowData).some((val) => val === "")) {
      alert("All fields are required");
      return;
    }

    // Process the form data, e.g., send it to the server
    setData([...data, rowData]);
    // Optionally, you can reset the form after submission
    setRowData({
      tof: "",
      lt: "",
      t: "",
      d: "",
      r: [],
    });
  };

  const tofOptions = [
    "Term Loan",
    "Business Correspondence limits",
    "Any other mutually agreed Product",
  ];
  const ltOptions = ["NBFC and Private Sector Lender", "From PSUs"];
  const tOptions = ["Single Interest", "Distributed Interest"];
  const dOptions = ["3 months", "6 months", "1 year", "2 years", "3 years"];
  const rOptions = [
    "0.50",
    "0.75",
    "1.00",
    "1.25",
    "1.50",
    "1.75",
    "2.00",
    "2.50",
    "3.00",
  ];

  return (
    <div className='form_container'>
    
      <h2 className='form_heading'>Form 1</h2>
      <form action="/app/forma" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <div className='content'>
        <h4>
          Company:
          </h4>
          <div className='single_col'>
          <input
            type="text"
            placeholder="Name"
        className='name'
            value={company}
            onChange={handleCompanyChange}
            placeholder="Enter company name"
            required
          />
          </div>
       
        </div>
        <br />
        <div className='content'>
        <h4>
          Current Date: </h4>
          <div className='single_col'>
          <input
            type="date"
            className='name'
            value={new Date(currentDate).toISOString().split("T")[0]} // Format as YYYY-MM-DD
            onChange={handleDateChange}
            required
          />
       </div>
       </div>
        <br />
      </form>
      <h2><center>Form 2</center></h2>
      <form action="/app/forma" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <div className='content'>
        <h4>
          TOF:
          </h4>
          <div className='single_col'>
          <select
            name="tof"
            value={rowData.tof}
            className='name'
            onChange={handleChange}
            required
          >
            <option value="">Select TOF</option>
            {tofOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
          </div>
        <br />
        <div className='content'>
        <h4>
          LT:
          </h4>
          <div className='single_col'>
          <select name="lt"  className='name' value={rowData.lt} onChange={handleChange} required>
            <option value="">Select LT</option>
            {ltOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            
          </select>
          </div>
          </div>
        <br />

        <div className='content'>
        <h4>
          T:
          </h4>
          <div className='single_col'>
          <select name="t"  className='name' value={rowData.t} onChange={handleChange} required>
            <option value="">Select T</option>
            {tOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        </div>
        <br />
        <h4>
          D:
          {dOptions
            .filter(
              (option) =>
                !(
                  rowData.t === "Distributed Interest" &&
                  ["3 months", "6 months", "1 year"].includes(option)
                )
            )
            .map((option) => (
              <label class="radio-label" key={option}>
                <input
                  type="radio"
                  name="d" 
                 
                  value={option}
                  checked={rowData.d === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
        </h4>
        <br />
        {rowData.t === "Single Interest" ||
        (rowData.d && rowData.d.includes("month")) ? (
          <div>
            <label>
              <>ROI Year 1:</>
              <select
                name="r1"
                className="name"
                value={rowData.r[0] || ""}
                onChange={(e) => handleRChange(0, e.target.value)}
                required
              >
                <option value="">Select R</option>
                {rOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <br />
          </div>
        ) : (
          Array.from(
            { length: rowData.d && parseInt(rowData.d.split(" ")[0]) },
            (_, index) => (
              <div key={index}>
                <label>
                  {index === 0 ? (
                    <>ROI year 1:</>
                  ) : (
                    <>ROI Year {index + 1}:</>
                  )}

                  <select
                    name={`r${index + 1}`}
                    value={rowData.r[index] || ""}
                    className='name'
                    onChange={(e) => handleRChange(index, e.target.value)}
                    required
                  >
                    <option value="">Select R</option>
                    {rOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <br />
              </div>
            )
          )
        )}

        <br />
        <button type="submit" className='form-btn'>Add Row</button>
        
      </form>
      <h2><center>Form 3</center></h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type="number"
            value={lenders}
            className='name'
            onChange={handleLenderChange}
            placeholder="Number of lenders..."
            required
          />
        </label>
      </form>
      <h2><center>Data</center></h2>
      {company ? (
        <>
          {company}<br /> {new Date(currentDate).toDateString()}
        </>
      ) : null}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Form2;
