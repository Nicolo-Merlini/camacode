import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName?: string;
    email?: string;
    company?: string;
    projectTypology?: string;
    budget?: string;
    description?: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    company,
    projectTypology,
    budget,
    description
}) => (
    <div>
        <h2>Nome: {firstName}</h2>
        <h2>Cognome: {lastName}</h2>
        <h2>email: {email}</h2>
        <h2>Ragione sociale: {company}</h2>
        <h2>Tipologia progetto: {projectTypology}</h2>
        <h2>Budget: {budget}</h2>
        <h2>Informazioni aggiuntive: {description}</h2>
    </div>
);