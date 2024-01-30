require("./model");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const app = express();
const upload = multer({ dest: "uploads/" });
const Routes = require("./routes");

// Use JSON middleware
app.use(express.json());

// Use mandates routes
app.use("/api", Routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my forma");
});

app.post("/app/forma", upload.single("file"), (req, res) => {
  console.log("Received request:", req.body);

  const { name, email, email2, email3, email4, body } = req.body;
  const file = req.file;
  console.log("Received file:", file);

  // Check if file is uploaded
  if (!file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded." });
  }

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "shivamdotsingh@gmail.com",
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Justmail shivamdotsingh@gmail.com",
    to: `${email},${email2},${email3},${email4}`,
    subject: "Mandate Creation Page",
    text: `
      // Name: ${name}
      // Email: ${email}
      Body: ${body}
    `,
    attachments: [
      {
        filename: file.originalname,
        path: file.path,
      },
    ],
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email." });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ success: true, message: "Email sent successfully." });
    }
    smtpTransport.close();
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server starting at the port ${PORT}`);
});
