const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "ss37blue",
    database: "mandate",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

// Get all mandates
exports.getAllMandates = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM mandates");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching mandates:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// Get a specific mandate by ID
exports.getMandateById = async (req, res) => {
  const mandateId = req.params.id;

  try {
    const [rows] = await pool.query("SELECT * FROM mandates WHERE id = ?", [
      mandateId,
    ]);

    if (rows.length === 0) {
      res.status(404).send("Mandate not found");
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error("Error fetching mandate by ID:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// Add a new mandate
exports.addMandate = async (req, res) => {
  const {
    company,
    cin,
    company_email,
    mandate_contact_person,
    ratio,
    date_of_sending,
    date_of_receiving,
    duration,
    process,
    view,
    status,
    region,
  } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO mandates (company, cin, company_email, mandate_contact_person, ratio, date_of_sending, date_of_receiving, duration, process, view, status, region) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        company,
        cin,
        company_email,
        mandate_contact_person,
        ratio,
        date_of_sending,
        date_of_receiving,
        duration,
        process,
        view,
        status,
        region,
      ]
    );

    if (rows.affectedRows === 1) { // tells how many rows are affected
      res.json({ message: "Mandate added successfully" });
    } else {
      res.status(500).send("Failed to add mandate");
    }
  } catch (error) {
    console.error("Error adding mandate:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateMandate = async (req, res) => {
  const mandateId = req.params.id;
  const {
    company,
    cin,
    company_email,
    mandate_contact_person,
    ratio,
    date_of_sending,
    date_of_receiving,
    duration,
    process,
    view,
    status,
    region,
  } = req.body;

  try {
    const [rows] = await pool.query(
      "UPDATE mandates SET company=?, cin=?, company_email=?, mandate_contact_person=?, ratio=?, date_of_sending=?, date_of_receiving=?, duration=?, process=?, view=?, status=?, region=? WHERE id = ?",
      [
        company,
        cin,
        company_email,
        mandate_contact_person,
        ratio,
        date_of_sending,
        date_of_receiving,
        duration,
        process,
        view,
        status,
        region,
        mandateId,
      ]
    );

    if (rows.affectedRows === 0) {
      res.status(404).send("Mandate not found");
    } else {
      res.json({ message: "Mandate updated successfully" });
    }
  } catch (error) {
    console.error("Error updating mandate:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

// Delete a specific mandate by ID
exports.deleteMandate = async (req, res) => {
  const mandateId = req.params.id;

  try {
    const [rows] = await pool.query("DELETE FROM mandates WHERE id = ?", [
      mandateId,
    ]);

    if (rows.affectedRows === 0) {
      res.status(404).send("Mandate not found");
    } else {
      res.json({ message: "Mandate deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting mandate:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
