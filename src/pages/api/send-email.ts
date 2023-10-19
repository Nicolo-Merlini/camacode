import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const firstName =
    typeof req.query.firstName === "string" ? req.query.firstName : "";
  const lastName =
    typeof req.query.lastName === "string" ? req.query.lastName : "";
  const email = typeof req.query.email === "string" ? req.query.email : "";
  const company =
    typeof req.query.company === "string" ? req.query.company : "";
  const project =
    typeof req.query.project === "string" ? req.query.project : "";
  const budget = typeof req.query.budget === "string" ? req.query.budget : "";
  const info = typeof req.query.info === "string" ? req.query.info : "";

  try {
    const data = await resend.emails.send({
      from: "Richiesta contatto <sales@camacode.com>",
      to: ["camacode.consulting@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        company,
        project,
        budget,
        info,
      }),
      text: "",
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
