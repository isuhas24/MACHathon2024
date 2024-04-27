import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
    const link = '192.168.0.5:3000 ';
    const message = 'Hello, world!';

    // Combine link and message into a single string
    const combinedData = `${link}/${message}`;

    return (
        <div>
            <QRCode value={combinedData} />
        </div>
    );
};

export default QRCodeComponent;
