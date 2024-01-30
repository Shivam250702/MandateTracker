<table style={{ border: "1px solid black" }}>
            <tr>
              <th style={{ border: "1px solid black" }}>Type of Funding</th>
              <th style={{ border: "1px solid black" }}>Fees</th>
              <th style={{ border: "1px solid black" }}>Terms of Payment</th>
            </tr>

            {borrowertype === "ALL" ? (
              <>
                 <tr>
                          <td style={{ border: "1px solid black" }}>
                            {Type_of_loan}
                            <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
             Term Loan/Bussiness Correspondence limits or any other mutually
                         </td>
                          <td style={{ border: "1px solid black" }}>
                            {borrowertype}
                            From NBFS and private sector lenders 
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            Within 7 days of raising the invoice. Invoice to be
                            raised post disbursement of first tranche.
                          </td>
                        </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    1 % of sanction amount (lender wise) plus applicable taxes
                    on all sanctions in 1 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 1 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    0.75 % of sanction amount (lender wise) plus applicable
                    taxes on all sanctions in 2 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 2 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    0.50 % of sanction amount (lender wise) plus applicable
                    taxes on all sanctions in 3 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 3 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}>
                    {Type_of_loan}
                    {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                  </td>
                  <td style={{ border: "1px solid black" }}>From PSUs</td>
                  <td style={{ border: "1px solid black" }}> For 3 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    2 % of sanction amount (lender wise) plus applicable taxes
                    on all sanctions in 1 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 1 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    1.50 % of sanction amount (lender wise) plus applicable
                    taxes on all sanctions in 2 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 2 year</td>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>
                    {" "}
                    1 % of sanction amount (lender wise) plus applicable taxes
                    on all sanctions in 3 year
                  </td>
                  <td style={{ border: "1px solid black" }}> For 3 year</td>
                </tr>
              </>
            ) : (
              <>
                {borrowertype === "NBFC and Private Sector Lender" ? (
                  <>
                    {numberofyears === "one" ? (
                      <>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            {Type_of_loan}
                            {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            {borrowertype}
                            {/* From NBFS and private sector lenders */}
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            Within 7 days of raising the invoice. Invoice to be
                            raised post disbursement of first tranche.
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px solid black" }}></td>
                          <td style={{ border: "1px solid black" }}>
                            1 % of sanction amount (lender wise) plus applicable
                            taxes on all sanctions in 1 year
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            {" "}
                            For 1 year
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {numberofyears === "two" ? (
                          <>
                            <tr>
                              <td style={{ border: "1px solid black" }}>
                                {Type_of_loan}
                                {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {borrowertype}
                                {/* From NBFS and private sector lenders */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                Within 7 days of raising the invoice. Invoice to
                                be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                1 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 1 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 1 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                0.75 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 2 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 2 year
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td style={{ border: "1px solid black" }}>
                                {Type_of_loan}
                                {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
      
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {borrowertype}
                                {/* From NBFS and private sector lenders */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                Within 7 days of raising the invoice. Invoice to
                                be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                1 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 1 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                With-in 7 days of raising the Invoice. Invoice to be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                0.75 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 2 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                With-in 7 days of raising the Invoice. Invoice to be raised post disbursement of first tranche.
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                0.50 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 3 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                With-in 7 days of raising the Invoice. Invoice to be raised post disbursement of first tranche.
                              </td>
                            </tr>

                          
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {numberofyears === "one" ? (
                      <>
                        <tr>
                          <td style={{ border: "1px solid black" }}>
                            {Type_of_loan}
                            {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            From PSUs
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            {" "}
                            For 3 year
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px solid black" }}></td>
                          <td style={{ border: "1px solid black" }}>
                            2 % of sanction amount (lender wise) plus applicable
                            taxes on all sanctions in 1 year
                          </td>
                          <td style={{ border: "1px solid black" }}>
                            {" "}
                            For 1 year
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {numberofyears === "two" ? (
                          <>
                            <tr>
                              <td style={{ border: "1px solid black" }}>
                                {Type_of_loan}
                                {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                From PSUs
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 3 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                2 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 1 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 1 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                1.50 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 2 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 2 year
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td style={{ border: "1px solid black" }}>
                                {Type_of_loan}
                                {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                From PSUs
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 3 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                2 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 1 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 1 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                1.50 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 2 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 2 year
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px solid black" }}></td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                1 % of sanction amount (lender wise) plus
                                applicable taxes on all sanctions in 3 year
                              </td>
                              <td style={{ border: "1px solid black" }}>
                                {" "}
                                For 3 year
                              </td>
                            </tr>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </table>