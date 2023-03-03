const nodemailer = require('nodemailer')

let transporter = null
if(process.env.NODE_ENV === 'prod'){
  transporter = nodemailer.createTransport({
    host: 'maildev.zyzyx.virtnet',
    port: 1025,
    secure: false
  })
}else{
  transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  })
}

async function sendMail(){
  const mailOptions ={
    from: 'admin@zyzyx.virtnet',
    to: 'maildev@zyzyx.virtnet',
    subject: 'Test email from virtnet Admin',
    text: "Welcome to zyzyx virtual network", //The texte content of the mail
    html:
      "<h1>ZYZYX</h1><p>A virtual net, a home lab, a machine</p>", // The html content
  }
  await transporter.sendMail(mailOptions)
}


sendMail()