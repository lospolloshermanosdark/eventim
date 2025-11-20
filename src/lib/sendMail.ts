import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

export default async function sendMail({ to, subject, html }: any) {
  await sgMail.send({
    to,
    from: "suporte@suaempresa.com.br",
    subject,
    html,
  });
}
