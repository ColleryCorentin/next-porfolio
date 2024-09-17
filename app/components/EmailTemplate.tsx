import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                          firstName,
                                                                          lastName,
                                                                            email,  phone,  company,  message

                                                                      }) => (
    <div>
        <p>
            Vous avez un nouveau message de {company}:
        </p>
        <p>
            {message}
        </p>
        <p>
                {phone
                    ? `Vous pouvez contacter ${firstName} ${lastName} au ${phone} ou ${email}.`
                    : `Vous pouvez contacter ${firstName} ${lastName} au ${email}.`
                }
            </p>
    </div>
);