import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div style={{ fontFamily: 'Roboto, sans-serif' }}>
    <h2 style={{ color: '#ed3237' }}>Nuevo Mensaje de Contacto</h2>
    <p><strong>Nombre:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensaje:</strong></p>
    <div style={{ padding: '20px', background: '#f4f4f4', borderRadius: '8px' }}>
      {message}
    </div>
  </div>
);