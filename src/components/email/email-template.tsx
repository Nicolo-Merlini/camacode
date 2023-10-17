import * as React from "react";

export interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email?: string;
  company?: string;
  project?: string;
  budget?: string;
  info?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  company,
  project,
  budget,
  info,
}) => (
  <div>
    <h2>Nome: {firstName}</h2>
    <h2>Cognome: {lastName}</h2>
    <h2>email: {email}</h2>
    <h2>Ragione sociale: {company}</h2>
    <h2>Tipologia progetto: {project}</h2>
    <h2>Budget: {budget}</h2>
    <h2>Informazioni aggiuntive: {info}</h2>
  </div>
);
