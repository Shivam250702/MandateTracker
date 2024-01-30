const mysql = require("mysql2");

async function createPool() {
  // Create the pool
  const pool = mysql
    .createPool({
      host: "localhost",
      user: "root",
      password: "Shivam_2002",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })
    .promise();

  try {
    // Attempt to acquire a connection to check if the configuration is valid
    await pool.getConnection();

    // Create the database if it doesn't exist
    await pool.query("CREATE DATABASE IF NOT EXISTS mandate");

    // // Switch to the mandate database
    await pool.query("USE mandate");

    // Define your schema creation SQL statements
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS mandates (
        id INT AUTO_INCREMENT PRIMARY KEY,
        company VARCHAR(255) NOT NULL,
        cin VARCHAR(20) NOT NULL,
        company_email VARCHAR(255) NOT NULL,
        mandate_contact_person VARCHAR(255) NOT NULL,
        ratio FLOAT NOT NULL,
        date_of_sending DATE NOT NULL,
        date_of_receiving DATE NOT NULL,
        duration INT NOT NULL,
        process VARCHAR(255) NOT NULL,
        view VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL,
        region VARCHAR(50) NOT NULL
      );
    `;

    // // Execute the schema creation SQL statements
    await pool.query(createTableSQL);

    console.log("Connected to the Database");
    return pool;
  } catch (err) {
    console.error("Error creating database connection pool:", err.message);
    throw err;
  }
}

createPool();
