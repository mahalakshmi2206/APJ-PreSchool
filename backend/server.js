require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

app.post("/send-mail", (req, res) => {
    const { firstName, lastName, phone, email, program } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "nandhinijo22@gmail.com", // Replace with management's email
        subject: "New Admission Form Submitted",
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email} \nProgram: ${program}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: "Error sending email" });
        } else {
            res.json({ message: "Email sent successfully!" });
        }
    });
});

app.post("/send-enquiry", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Replace with your email sending logic (Nodemailer or other service)
        await transporter.sendMail({
            from: `"Enquiry Form" <your-email@example.com>`,
            to: "nandhinijo22@gmail.com", // Replace with actual school email
            subject: `New Enquiry: ${subject}`,
            html: `
                <h3>New Enquiry from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `
        });

        res.json({ message: "Enquiry sent successfully!" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ message: "Failed to send enquiry. Please try again." });
    }
});


app.listen(5000, () => console.log("Server running on port 5000"));
