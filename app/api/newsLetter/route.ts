import sendgridMail from "@sendgrid/mail";

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const SENDGRID_MARKETING_LIST_ID = "NEWS_LETTER"; // Replace with your list ID from SendGrid
const SENDGRID_CLIENT_EMAIL = 'Info@shapedservices.com';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list_ids: [SENDGRID_MARKETING_LIST_ID], // Add to the newsletter list
        contacts: [{ email }],
      }),
    });

    if (!response.ok) throw new Error("Failed to add contact");

    // Send a confirmation email
    const message = {
      to: email,
      from: SENDGRID_CLIENT_EMAIL,
      subject: "Thanks for subscribing to our newsletter!",
      html: `<p>Welcome! You've successfully subscribed to our newsletter.</p>`,
    };

    const subscribed = await sendgridMail.send(message);

    if(subscribed) return new Response(JSON.stringify({ message: "Successfully subscribed!" }), { status: 200 });

    else return new Response(JSON.stringify({ message: "Not yet subscribed!" }), { status: 400 });    
  }catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ errorMsg: error?.message, cod: error?.code, response: error?.response }), { status: error?.code });
  }
}
