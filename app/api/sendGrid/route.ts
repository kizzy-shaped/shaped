import sendgridMail from '@sendgrid/mail';


sendgridMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber?: string;
  country: string;
  favouriteBrand?: string;
}

const SENDGRID_API_KEY = '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';

const SENDGRID_CLIENT_EMAIL = 'Info@shapedservices.com';

export async function POST(request: Request) {
  const { name, email, phoneNumber, country, favouriteBrand }: ContactFormData = await request.json();

  const message = {
    to: [SENDGRID_CLIENT_EMAIL], 
    from: SENDGRID_CLIENT_EMAIL as string, 
    subject: `Form Submission - Client Information`,
    // text: `
    //   Name: ${name}
    //   Email: ${email}
    //   Phone: ${phoneNumber}
    //   Country: ${country}
    //   Favourite Brand: ${favouriteBrand}
    // `,
    html: `
      <p><strong>Sent via form submission from <a href="shapedservices.com">Shaped</a></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Favourite Brand:</strong> ${favouriteBrand}</p>

      <p style="margin-top: 2em;"><a href="https://app.sendgrid.com/?_gl=1*4p3lj9*_gcl_au*MTM2MDEyNDYzMC4xNzM4NzUxMzM3*_ga*NDg3MTc0NjYyLjE3Mzg3NTEzNzg.*_ga_8W5LR442LD*MTczOTM1ODM5OS44LjEuMTczOTM2MDA3MC4wLjAuMA..">Manage Submissions</a></p>
    `,
  };

  try {
    await sendgridMail.send(message);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error: {message: string, code: number, response: any}) {
    console.error(error);
    return new Response(JSON.stringify({ errorMsg: error?.message, cod: error?.code, response: error?.response }), { status: error?.code });
  }
}
