import formData from "form-data";
import Mailgun from "mailgun.js";

if (typeof window !== "undefined") {
  throw new Error("sendEmail.ts must only be used on the server side.");
}

type EmailResponse = {
  id: string;
  message: string;
};

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string, 
  url: "https://api.mailgun.net",
});

// **Use the sandbox domain for testing**
const domain = "sandboxdfd406283ad04498a7e19b158e68d5c9.mailgun.org";

export const sendConfirmationEmail = async (email: string, name: string): Promise<EmailResponse> => {
  try {
    const result = await mg.messages.create(domain, {
      from: `ISF Global AI Summit <noreply@${domain}>`,
      to: [email],
      subject: "ISF Global AI Summit 2025 – Registration Confirmed",
      text: `Dear ${name},\n\nThank you for registering for the ISF Global AI Summit 2025. Your registration is now confirmed.\nWe look forward to welcoming you to this exclusive gathering of AI leaders and innovators. For the latest updates and announcements, please follow our official social media channels.\n\nBest regards,\nThe ISF Global AI Summit Team`,
      html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #333333; line-height: 1.6;">
            <!-- Header with Registration Confirmed title -->
            <div style="background-color: #1a365d; padding: 30px 0; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 500;">Registration Confirmed</h1>
              <p style="color: #a0aec0; margin: 8px 0 0; font-size: 16px;">ISF Global AI Summit 2025</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
              <p style="margin-bottom: 20px; font-size: 16px; color: #333333;">
                Dear <strong style="color: #1a365d;">${name}</strong>,
              </p>
              
              <p style="margin-bottom: 20px; font-size: 16px; color: #333333;">
                Thank you for registering for the <strong style="color: #1a365d;">ISF Global AI Summit 2025</strong>. 
                Your registration has been successfully confirmed!
              </p>
              
              <!-- Event Details Box -->
              <div style="background-color: #f7fafc; border-left: 4px solid #4299e1; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #2b6cb0; font-size: 18px; font-weight: 500; margin-bottom: 15px;">
                  Event Details
                </h3>
                <div>
                  <p style="margin: 0 0 8px 0; color: #2d3748;">
                    <span style="font-weight: 500; color: #4a5568;">Date:</span> May 29-30, 2025
                  </p>
                  <p style="margin: 0; color: #2d3748;">
                    <span style="font-weight: 500; color: #4a5568;">Location:</span> Austin, USA
                  </p>
                </div>
              </div>
              
              <p style="margin-bottom: 20px; font-size: 16px; color: #333333;">
                We look forward to welcoming you to this prestigious event where industry leaders and AI innovators will gather to shape the future of artificial intelligence.
              </p>
              
              <!-- What to Expect Section -->
              <div style="margin: 30px 0;">
                <h3 style="color: #2b6cb0; font-size: 18px; font-weight: 500; margin-top: 0; margin-bottom: 15px;">
                  What to Expect
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: #4a5568;">
                  <li style="margin-bottom: 10px; padding-left: 5px;">Keynote presentations from world-renowned AI experts</li>
                  <li style="margin-bottom: 10px; padding-left: 5px;">Interactive workshops and technology demonstrations</li>
                  <li style="margin-bottom: 10px; padding-left: 5px;">Connect with experts, academics, and entrepreneurs</li>
                  <li style="padding-left: 5px;">Exclusive insights into emerging AI trends and applications</li>
                </ul>
              </div>
              
              <!-- Social Media Links -->
              <div style="text-align: center; margin: 30px 0 20px 0;">
                <p style="margin-bottom: 15px; font-size: 15px; color: #4a5568;">
                  For the latest updates and announcements:
                </p>
                <div>
                  <a href="https://x.com/theISFnetwork" style="display: inline-block; background-color: #1a365d; color: white; padding: 10px 20px; margin: 0 5px; border-radius: 4px; text-decoration: none; font-weight: 500; font-size: 14px;">
                    Follow on Twitter
                  </a>
                  <a href="https://www.linkedin.com/showcase/theisfnetwork/" style="display: inline-block; background-color: #1a365d; color: white; padding: 10px 20px; margin: 0 5px; border-radius: 4px; text-decoration: none; font-weight: 500; font-size: 14px;">
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 14px;">
              <p style="margin: 0 0 10px 0;">
                © 2025 ISF Global AI Summit. All rights reserved.
              </p>
            </div>
          </div>
      `,
    });

    console.log("Email sent:", result);
    return { id: result.id ?? "", message: result.message ?? "" };
  } catch (error: any) {
    console.error("Mailgun error:", error.message);
    throw new Error(`Email sending failed: ${error.message}`);
  }
};
