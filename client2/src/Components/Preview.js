import React from "react";

const Preview = ({ company, currentDate, data, lenders }) => {
  const map = { 1: "1st year", 2: "2nd year", 3: "3rd year" };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  const dValues = data.map((item) => {
    const parts = item.d.split(" ");
    if (parts[1] && parts[1].toLowerCase() === "years") {
      return { value: parseInt(parts[0]), unit: "years" };
    } else if (parts[1] && parts[1].toLowerCase() === "months") {
      return { value: parseInt(parts[0]), unit: "months" };
    }
    return { value: 0, unit: "" };
  });

  const maxDuration = dValues.reduce(
    (max, current) => {
      return current.value > max.value ? current : max;
    },
    { value: 0, unit: "" }
  );

  function Export2Word() {
    var element = "exportContent";
    var filename = "Mandate";
    var preHtml =
      "<html xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Docx</title><style>table {border-collapse: collapse; width: 100%;} th, td {border: 1px solid black; padding: 8px; text-align: left;} </style></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;
    var blob = new Blob(["\ufeff", html], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    // Specify link url
    var url = URL.createObjectURL(blob);
    // Specify file name
    filename = filename ? filename + ".docx" : "document.docx";
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
  }

  return (
    <div style={{width:"100%"}}>
      <div className="letterdata" id="exportContent" style={{width:"100%",marginLeft:"12px"}} >
        <p style={{ textAlign: "center" }}>
          <b>On the LetterHead of Borrower</b>
        </p>

        <p>
          <b>{formatDate(new Date(currentDate))}</b>
        </p>

        <p>
          <b>Express Rupya - Proprietor Anita Khandelwal</b>
          <br />
          <b>
            A/4 Chandrika Building, Shankar Lane, Kandivali West, Mumbai -400067
          </b>
        </p>

        <p>Kind Attn : Anita Khandelwal</p>

        <p>
          <u>
            <b>Sub : Appointment Letter for Raising funds for {company}</b>
          </u>
        </p>

        <p>Dear Madam,</p>
        <p>
          We refer to our ongoing discussions with you for providing advisory
          services to <b>{company}</b>. We agree to appoint{" "}
          <b>Express Rupya </b>
          for helping us in raising funds from identified financial Institutions
          on the Following terms :
        </p>

        <table style={{ borderSpacing: "0", width: "full" }}>
          <tr>
            <th>
              <p>Particulars</p>
            </th>
            <th>
              <p>Particulars</p>
            </th>
          </tr>

          <tr>
            <td>
              <p>Facility Amount</p>
            </td>
            <td>
              <p>Any Amount</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>Tenor</p>
            </td>
            <td rowSpan="3">
              <p>
                Mutually agreed terms between Facility Provider and
                <b> {company}</b>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <p>Collateral</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>Tentative Interst range and processing fees</p>
            </td>
          </tr>
        </table>
        <p>
          <b>
            We have also outlined the broadscope of services and agree to pay
            the fees mentioned below on successful close of transaction
          </b>
        </p>
        <p>
          <b>Scope of Services:</b>
        </p>
        <li>
          To Introduce and coordinate with various financial Institutions.
        </li>
        <li>
          To Raise Finance through Term Loan / Business Correspondence limits or
          any other mutually agreed Product.
        </li>
        <li>Obtaining a term sheet from the lenders in respect of funding</li>
        <li>Assist in negotiation process.</li>
        <li>Coordinate with various stakeholders involved.</li>
        <li>Assist in Post transactional activities.</li>
        <br />
        <p>
          <b>Fees and Payment Term:</b>
          <p>We agree to pay you the fees as per below terms </p>
        </p>
        <br />
        <br />
        <table style={{ borderSpacing: "0", width: "full" }}>
          <tr>
            <th>
              <p>Type of Funding</p>
            </th>
            <th>
              <p>Fees</p>
            </th>
            <th>
              <p>Terms of Payment</p>
            </th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <p>
                  <b>{row.tof}</b>
                </p>
              </td>
              <td>
                <p>
                  <b>{row.lt}</b>
                  <br />
                  <br />
                </p>
                {row.t === "Single Interest" ||
                (row.d && row.d.includes("month")) ? (
                  <p>
                    <b>{row.r[0]} % </b> of the disbursement amount (lender
                    wise) plus applicable taxes on each disbursement during the
                    tenor of the agreement that is <b>{row.d}</b>.
                  </p>
                ) : (
                  Array.from(
                    { length: row.d && parseInt(row.d.split(" ")[0]) },
                    (_, index) => (
                      <p key={index}>
                        <b>{row.r[index]} %</b> of sanction amount (lender wise)
                        plus applicable taxes on all sanctions in{" "}
                        <b>{map[index + 1]}</b>.
                      </p>
                    )
                  )
                )}
              </td>
              <td>
                {index === 0 && (
                  <p>
                    Within 7 days of raising the invoice. Invoice to be raised
                    post disbursement of the first tranche.
                  </p>
                )}
              </td>
            </tr>
          ))}
        </table>
        <p>
          <p>
            Payment of fees will be made in the name of{" "}
            <b>Express Rupya Capital Advisors</b>.
          </p>{" "}
          <p>
            We hereby agree that we will not enter into any agreement with
            lenders identified and agreed to between <b>{company}</b> and
            <b> Express Rupya Capital Advisor</b> without involving
            <b> Express Rupya Capital Advisor</b> for{" "}
            <b>
              {maxDuration.value} {maxDuration.unit}
            </b>{" "}
            from the date of this letter.
          </p>
        </p>
        <p>
          {" "}
          Both <b>{company}</b> and <b>Express Rupya Capital Advisor</b> may
          terminate the mandate by giving 90 (ninety-days) written notice to
          each other, but <b>{company}</b> will be required to pay all fees
          which have accured to <b>Express Rupya Capital Advisor</b> as per the
          terms mentioned above.
        </p>
        <p>
          Please find below a list of Existent Lenders as per the terms
          mentioned above.
        </p>
        <p>
          <b>Existing Lenders / Negative List of Lenders:</b>
        </p>
        <ol>
          {Array.from({ length: lenders }, (_, index) => (
            <li key={index}></li>
          ))}
        </ol>
        <p>
          <b>Concillaton:</b>
          <br />
          If any dispute or differences arises between the parties hereto with
          respect to the subject matter of this mandate or interpretation of
          enforcement of one or more of the clause or clauses herein contained ,
          the same shall be resolved through <b>Concillation</b>.
        </p>
        <br />
        <p>
          For <b>{company}</b>
        </p>
        <br />
        <br />
        <p>
          <b>Authorised Signatory</b>
        </p>
        {/* </div> */}
      </div>
      <button onClick={Export2Word} className="downloadbutton">
        Export to Word
      </button>
    </div>
  );
};

export default Preview;
