import sgMail from "@sendgrid/mail";
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API);

export default async function sendk(req, res) {
  const msg = {
    to: "karanhanju9696@gmail.com", // Change to your recipient
    from: "hindipunjabitutor@gmail.com", // Change to your verified sender
    subject: "Booking Confirmation",
    html: ` <p>Dear Customer,</p>
    <p>Thank you for choosing our service for your transportation needs. We are pleased to confirm your booking and provide you with the following details:</p>
    
    <h3>Booking Details:</h3>
    <ul>
        <li><strong>Service:</strong> ${req.body.serviceType}</li>
        <li><strong>Service mode:</strong>${req.body.vehicle}</li>
        <li><strong>Amount Paid:</strong> ${req.body.price}</li>
    </ul>
    <p>We are delighted to inform you that your taxi has been reserved as requested. Our professional  will be waiting for you at the designated pickup location at the specified date and time. You can expect a comfortable and reliable ride throughout your journey.</p>
    
    <p>Should you have any further inquiries or need to make any changes to your booking, please feel free to reach out to our customer service team at +918198065062 or Cabsinamritsar@gmail.com. We are available to assist you with any queries you may have.</p>
    <p>Best regards,</p>
    <p>Cabs in Amritsar</p>
`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ status: "success" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
