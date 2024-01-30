import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./Style.css";
import Form from "../Form/Form";
// import moment from 'moment';

// to download in wordfile

function Export2Word() {
  var element = "exportContent";
  var filename = "Mandate";
  var preHtml =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml + document.getElementById(element).innerHTML + postHtml;

  var blob = new Blob(["\ufeff", html], {
    type: "application/msword",
  });

  // Specify link url
  var url =
    "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

  // Specify file name
  filename = filename ? filename + ".doc" : "document.doc";

  // Create download link element
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
  console.log(10);
}

// editor

function Viewer() {
  const company_name = " ABC Pvt Ltd";
  const [currentDate, setcurrentDate] = useState(Date.now());
  const [CompanyName, setCompanyName] = useState(company_name);
  const [Type_of_loan, setType_of_loan] = useState("");
  const [numberofyears, setnumberofyears] = useState("one");
  const [borrowertype, setborrowertype] = useState("");
  // const [View,setView]=useState(true);
  const [fees, setfee] = useState("");
  // const [write, setwrite] = useState([]);
  const [data, setdata] = useState("");
  const [Lenders, setLenders] = useState(0);
  const [mandate, setmandate] = useState("Distributed");
  const [interest, setinterest] = useState(0);
  const [val, setval] = useState("");
  const [loanData, setLoanData] = useState([]);
  const [v1, setv1] = useState([]);
  const [lenderType, setLenderType] = useState("Private");

  const toggleLenderType = () => {
    setLenderType((prevType) =>
      prevType === "Private" ? "Public" : "Private"
    );
  };
  const formattedCurrentDate = new Date(currentDate).toLocaleDateString(
    "en-CA"
  );
  const options = [
    { label: "Term Loan", value: "Term Loan" },
    {
      label: "Business Correspondence limits",
      value: "Business Correspondence limits",
    },
    {
      label: "Any other mutually agreed Product",
      value: "Any other mutually agreed Product",
    },
  ];
  const options2 = [
    { label: "Distributed", value: "Distributed" },

    {
      label: "Single",
      value: "Single",
    },
  ];

  const options3 = [
    {
      label: "NBFC and Private Sector Lender",
      value: "NBFC and Private Sector Lender",
    },

    {
      label: "From PSUs",
      value: "From PSUs",
    },
    {
      label: "Single Interest",
      value: "Single Interest",
    },
  ];
  var x1 = "";
  var l2 = [];
  l2.push(loanData);

  const addRow = () => {
    const newRow = {
      typeOfFunding: Type_of_loan,
      fees: fees,
      termsOfPayment: data,
      numberofyears: numberofyears,
    };

    setLoanData([...loanData, newRow]);
    loanData.push(newRow);
    console.log(loanData);
    // Clear input values after adding a row
    setType_of_loan("");
    setfee("");
    setdata("");
  };
  const handleSplitValues = () => {
    let splitValues = val.split(",");
    setv1(splitValues);
    console.log(splitValues);
    console.log(splitValues[0]);
  };

  const handlefun = (e) => {
    setLenders(e.target.value);
  };
  const handleData = (event) => {
    setLenders(event.target.value);
  };

  const handlefun2 = (e) => {
    setval(e.target.value);
    handleSplitValues();
  };
  // const changeDate = (event) => {
  //   const selectedDate = new Date(event.target.value).getTime();
  //   setcurrentDate(selectedDate);
  // };
  const changeDate = (event) => {
    const selectedDate = new Date(event.target.value)
      .toISOString()
      .split("T")[0];
    setcurrentDate(selectedDate);
  };
  const changeName = (event) => {
    var newVal = event.target.value;

    setCompanyName(newVal);
  };
  const mandatecheck = (val) => {
    setmandate(val);

    // console.log(Type_of_loan);
    // console.log(SelectedValue);
  };
  const LoanType = (val) => {
    setType_of_loan(val);

    // console.log(Type_of_loan);
    // console.log(SelectedValue);
  };

  const NoOfYears = (event) => {
    const NOY = event.target.value;
    setnumberofyears(NOY);
    setfee(NOY);
    console.log(NOY);
    if (NOY === "One Year") {
      setinterest(1);
    } else if (NOY === "Two Year") {
      setinterest(2);
    } else if (NOY === "Three Year") {
      setinterest(3);
    }
  };

  const BorrowerType = (event) => {
    setborrowertype(event);
  };

  const changefee = (event) => {
    const Type = event.target.value;
    setfee(Type);
  };
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };
  return (
    <div className="containeer">
      <div className="inputdata">
        <div class="allinput">
          <b>Type of the Mandate </b>
          <MultiSelect
            style={{ "margin-left": "50px" }}
            className="inputloantype"
            onChange={mandatecheck}
            options={options2}
          />
        </div>
        <div class="allinput">
          <b>Date of the Mandate </b>
          <input
            type="date"
            datatype="DD-MM-YY"
            value={new Date(currentDate).toISOString().split("T")[0]}
            name=""
            id=""
            defaultValue={Date.now()}
            className="inputDate"
            onChange={changeDate}
          />
        </div>

        <div class="allinput">
          <b>Name of the Company </b>
          <input
            type="text"
            className="inputname"
            value={CompanyName}
            placeholder="company name eg ABC Pvt Ltd."
            name=""
            id=""
            onChange={changeName}
          />
        </div>

        <div class="allinput" style={{ display: "flex" }}>
          <b>Types of Loan: </b>
          <MultiSelect
            style={{ "margin-left": "50px" }}
            className="inputloantype"
            onChange={LoanType}
            options={options}
          />
        </div>

        <div class="allinput">
          <b>Number of Years </b>
          <select
            class="form-select"
            id="loan-type"
            className="inputname"
            onChange={NoOfYears}
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="one">One Year</option>
            <option value="two"> Two Year</option>
            <option value="three">Three Year</option>
          </select>
        </div>
        <div class="allinput">
          <b>Interest Rates(Seperated by commas) </b>
          <input
            type="text"
            className="inputname"
            value={val}
            placeholder=""
            onChange={handlefun2}
          />
        </div>
        <div class="allinput">
          <b>Borrower Type </b>
          <MultiSelect
            class="form-select"
            id="loan-type"
            className="inputname"
            onChange={BorrowerType}
            aria-label="Default select example"
            options={options3}
          >
            {/* <option value="ALL" >
              {" "}
              
              
            </option>
            <option value="NBFC and Private Sector Lender">
              NBFC and Private Sector Lender
            </option>
            <option value="From PSUs"> From PSUs</option> */}
          </MultiSelect>
        </div>

        <div class="allinput">
          <b>Fees </b>
          <input
            type="text"
            className="inputname"
            value={fees}
            placeholder="Fees"
            name=""
            id=""
            onChange={changefee}
            // onChange={changeName}
          />
        </div>
        {/* <div class="allinput">
          <b>Existing Lenders </b>
          <input
            type="text"
            className="inputname"
            value={data}
            placeholder="Add Lenders"
            name=""
            id=""
            onChange={handleData}
            // onChange={changeName}
          />
        </div> */}
        <div class="allinput">
          <b>Lenders Required </b>
          <input
            type="number"
            className="inputname"
            value={Lenders}
            placeholder="Add Lenders"
            name=""
            id=""
            onChange={handleData}
            // onChange={changeName}
          />
        </div>
        <button type="button" className="downloadbutton" onClick={addRow}>
          Add Row
        </button>
        <button onClick={Export2Word} className="downloadbutton">
          Export to Word
        </button>
        <Form></Form>
      </div>

      {/* letter content  */}

      <div className="letterdata" id="exportContent">
        <p className="centerheading" style={{ textAlign: "center" }}>
          <b>On the LetterHead of Borrower</b>
        </p>
        <div className="letterinput">
          <b>{formatDate(new Date(currentDate))}</b>
          <p>
            <b>Express Rupya - Proprietor Anita Khandelwal</b>
            <br />
            <b>
              A/4 Chandrika Building, Shankar Lane, Kandivali West, Mumbai
              -400067
            </b>
          </p>
          <p>Kind Attn : Anita Khandelwal</p>
          <p>
            <u>
              {" "}
              <b>Sub : Appointment Letter for Raising funds for</b>{" "}
              <b>{CompanyName}</b>
            </u>
          </p>
          <p>Dear Madam,</p>
          <p>
            We refer to our ongoing discussions with you for providing advisory
            services to <b>{CompanyName}</b>. We agree to appoint{" "}
            <b>Express Rupya </b>
            for helping us in raising funds from identified financial
            Institutions on the Following terms :
          </p>
          <table style={{ borderSpacing: "0", width: "full" }}>
            <tr>
              <th>Particulars</th>
              <th>Particulars</th>
            </tr>

            <tr>
              <td>Facility Amount</td>
              <td>Any Amount</td>
            </tr>

            <tr>
              <td>Tenor</td>
              <td rowSpan="3">
                Mutually agreed terms between Facility Provider and{" "}
                <b>{CompanyName}</b>{" "}
              </td>
            </tr>

            <tr>
              <td>Collateral</td>
            </tr>

            <tr>
              <td>Tentative Interst range and processing fees</td>
            </tr>
          </table>
          <b>
            We have also outlined the broadscope of services and agree to pay
            the fees mentioned below on successful close of transaction
          </b>
          <br />
          <br />
          <b>Scope of Services:</b>
          <li>
            To Introduce and coordinate with various financial Institutions.
          </li>
          <li>
            To Raise Finance through Term Loan / Business Correspondence limits
            or any other mutually agreed Product.
          </li>
          <li>Obtaining a term sheet from the lenders in respect of funding</li>
          <li>Assist in negotiation process.</li>
          <li>Coordinate with various stakeholders involved.</li>
          <li>Assist in Post transactional activities.</li>
          <br />
          <b>Fees and Payment Term</b>
          <br />
          <span>We agree to pay you the fees as per below terms </span>
          <br />
          <br />
          <table style={{ borderSpacing: "0", width: "full" }}>
            <tr>
              <th>Type of Funding</th>
              <th>Fees</th>
              <th>Terms of Payment</th>
            </tr>

            {borrowertype === "Single Interest" ? (
              <>
                <tr>
                  <td>{Type_of_loan}</td>
                  <td>
                    {`${v1[0]} % of the disbursement amount (lender wise) plus applicable taxes on each disbursement during the tenor of the agreement that is years`}
                  </td>
                  <td>
                    Within 7 days of raising the invoice. Invoice to be raised
                    post disbursement of first tranche.
                  </td>
                </tr>
              </>
            ) : borrowertype === "ALL" ? (
              <>
                <tr>
                  <td>
                    {Type_of_loan}
                    <MultiSelect onChange={LoanType} options={options} />
                    Term Loan/Bussiness Correspondence limits or any other
                    mutually
                  </td>
                  <td>
                    {borrowertype}
                    From NBFS and private sector lenders
                  </td>
                  <td>
                    Within 7 days of raising the invoice. Invoice to be raised
                    post disbursement of first tranche.
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                  </td>
                  <td> For 1 year</td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 year`}
                  </td>
                  <td> For 2 year</td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {`${v1[2]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 3 year`}
                  </td>
                  <td> For 3 year</td>
                </tr>

                <tr>
                  <td>
                    {Type_of_loan}
                    {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                  </td>
                  <td>From PSUs</td>
                  <td>
                    {" "}
                    With-in 7 days of raising the Invoice. Invoice to be raised
                    post disbursement of first tranche
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                  </td>
                  <td> For 1 year</td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 year`}
                  </td>
                  <td> For 2 year</td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {" "}
                    {`${v1[2]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 3 year`}
                  </td>
                  <td> For 3 year</td>
                </tr>
              </>
            ) : (
              <>
                {borrowertype === "NBFC and Private Sector Lender" ? (
                  <>
                    {numberofyears === "one" ? (
                      <>
                        <tr>
                          <td>
                            {Type_of_loan}
                            {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                          </td>
                          <td>
                            {borrowertype}
                            {/* From NBFS and private sector lenders */}
                          </td>
                          <td>
                            Within 7 days of raising the invoice. Invoice to be
                            raised post disbursement of first tranche.
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td>
                            {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                          </td>
                          <td> For 1 year</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {numberofyears === "two" ? (
                          <>
                            <tr>
                              <td>
                                {Type_of_loan}
                                {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                              </td>
                              <td>
                                {borrowertype}
                                {/* From NBFS and private sector lenders */}
                              </td>
                              <td>
                                Within 7 days of raising the invoice. Invoice to
                                be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                              </td>
                              <td> For 1 year</td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 year`}
                              </td>
                              <td> For 2 year</td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td>
                                {Type_of_loan}
                                {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                              </td>
                              <td>
                                {borrowertype}
                                {/* From NBFS and private sector lenders */}
                              </td>
                              <td>
                                Within 7 days of raising the invoice. Invoice to
                                be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                              </td>

                              <td> For 1st Year</td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 year`}
                              </td>
                              <td> For 2nd Year</td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                {`${v1[2]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 3 year`}
                              </td>
                              <td> For 3rd Year</td>
                            </tr>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {numberofyears === "one" && mandate != "Single" ? (
                      <>
                        <tr>
                          <td>
                            {Type_of_loan}
                            {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                          </td>
                          <td>From PSUs</td>
                          <td>
                            {" "}
                            With-in 7 days of raising the Invoice. Invoice to be
                            raised post disbursement of first tranche
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td>
                            <span style={{ fontWeight: "bold" }}>
                              Bank Detail:
                            </span>
                            {` ${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                          </td>

                          <td> For 1 year</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {numberofyears === "two" && mandate != "Single" ? (
                          <>
                            <tr>
                              <td>
                                {Type_of_loan}
                                {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                              </td>
                              <td>From PSU</td>
                              <td>
                                {" "}
                                With-in 7 days of raising the Invoice. Invoice
                                to be raised post disbursement of first tranche
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                <span style={{ fontWeight: "bold" }}>
                                  Bank Detail:
                                </span>
                                {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                              </td>
                              <td> For 1 year</td>
                            </tr>

                            <tr>
                              <td></td>
                              <td>
                                <span style={{ fontWeight: "bold" }}>
                                  Bank Detail:
                                </span>
                                {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 year`}
                              </td>
                              <td> For 2 year</td>
                            </tr>
                          </>
                        ) : (
                          <>
                            {mandate !== "Single" && (
                              <>
                                <tr>
                                  <td>
                                    {Type_of_loan}
                                    {/* Term Loan/Business Correspondence limits or any other mutually
        agreed product */}
                                  </td>
                                  <td>From PSU</td>
                                  <td>
                                    {" "}
                                    With-in 7 days of raising the Invoice.
                                    Invoice to be raised post disbursement of
                                    the first tranche
                                  </td>
                                </tr>

                                <tr>
                                  <td></td>
                                  <td>
                                    <span style={{ fontWeight: "bold" }}>
                                      Bank Detail:
                                    </span>
                                    {`${v1[0]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 1 year`}
                                  </td>
                                  <td> For 1 year</td>
                                </tr>

                                <tr>
                                  <td></td>
                                  <td>
                                    <span style={{ fontWeight: "bold" }}>
                                      Bank Detail:
                                    </span>
                                    {`${v1[1]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 2 years`}
                                  </td>
                                  <td> For 2 years</td>
                                </tr>

                                <tr>
                                  <td></td>
                                  <td>
                                    {" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      Bank Detail:
                                    </span>
                                    {`${v1[2]} % of sanction amount (lender wise) plus applicable taxes on all sanctions in 3 years`}
                                  </td>
                                  <td> For 3 years</td>
                                </tr>
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </table>
          <p>
            {" "}
            We hereby agree that we will not enter into any agreement with
            lenders identified and agreed to between <b>{CompanyName}</b> and
            <b> Express Rupya Capital Advisor</b> without involving
            <b> Express Rupya Capital Advisor</b> for {numberofyears}{" "}
            {" years "}
            from the date of this letter .
          </p>
          <p>
            {" "}
            Both <b>{CompanyName}</b> and <b>Express Rupya Capital Advisor</b>{" "}
            may terminate the mandate by giving 90 (ninety-days) written notice
            to each other, but <b>{CompanyName}</b> will be required to pay all
            fees which have accured to <b>Express Rupya Capital Advisor</b> as
            per the terms mentioned above.
          </p>
          <p>
            Please find below a list of Existent Lenders as per the terms
            mentioned above.
          </p>
          <p>
            <b>Existing Lenders / Negative List of Lenders:</b>
          </p>
          <ol>
            {Array.from({ length: Lenders }, (_, index) => (
              <li key={index}></li>
            ))}
          </ol>
          <p>
            <b>Concillaton:</b>
            <br />
            If any dispute or differences arises between the parties hereto with
            respect to the subject matter of this mandate or interpretation of
            enforcement of one or more of the clause or clauses herein contained
            , the same shall be resolved through <b>Concillation</b>.
          </p>
          <br />
          <p>
            For <b>{CompanyName}</b>
          </p>
          <br />
          <br />
          <p>
            <b>Authorised Signatory</b>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Viewer;
