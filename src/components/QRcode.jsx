import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {

  const url = 'http://localhost:3000/2';

  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeComponent;
