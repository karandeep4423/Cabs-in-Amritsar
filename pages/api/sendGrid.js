import sgMail from '@sendgrid/mail';
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API);

 export default async function sendk(req,res){

  const msg = {
    to: 'karanhanju9696@gmail.com', // Change to your recipient
    from: 'hindipunjabitutor@gmail.com', // Change to your verified sender
    subject: 'Message from Cabs in Amritsar',
    html: `<strong>Email of customer is ${req.body.email} <br/>Phone of customer is ${req.body.phone}<br/>Name of customer is ${req.body.name}<br/><br/> ${req.body.message}</strong>`,
  }
   await sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ status: 'Ok' });
    })
    .catch((error) => {
      res.status(500).json({ error:error.message });
    })

}

