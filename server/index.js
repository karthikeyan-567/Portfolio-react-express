const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();


let port = 3000;


let app = express();
app.use(cors());
app.use('/api', require('./routes/bulkmail'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("server is running")
})

app.post("/bulkmail", async (req, res) => {
  const { sender, subject, context } = req.body;

  let email= process.env.MY_EMAIL
  let appPas= process.env.MY_PASS
  console.log(email , appPas)
  if (!sender || !subject || !context) {
    return res
      .status(400)
      .send("Missing required fields: sender, subject, or context");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"230704.it@rmkec.ac.in" , // Your email
      pass: appPas, // Your app password (use environment variables for security)
    }, tls: {
      rejectUnauthorized: false // ⛔ allow self-signed certificate
    }
  });

  try {
    const info = await transporter.sendMail({
      from: "230704.it@rmkec.ac.in", // sender address
      to: sender, // your email (recipient)
      subject: subject , // Subject line
      text: context +`
      _
      _
      _
      _     
     REPLY 👇
      hi im Karthik!
      Thanks for Contacting me :)
      soon you will be get notified with our mail
      your problem will rectified soon `, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Email not sent");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
