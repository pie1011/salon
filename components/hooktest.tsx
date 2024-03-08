"use client";
import React, { useState } from 'react';

function HookTest() {
  const [data, setData] = useState(null);

  const handleEvent = async () => {
    const response = await fetch('/api/webhooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add your Svix headers here
        'svix-id': 'your-svix-id',
        'svix-timestamp': 'your-svix-timestamp',
        'svix-signature': 'your-svix-signature',
      },
      body: JSON.stringify({
        // Your payload here
      }),
    });

    if (!response.ok) {
      console.error('Webhook failed', response);
      return;
    }

    const responseData = await response.json();
    setData(responseData);
  };

  return (
    <div>
      <button onClick={handleEvent}>Trigger Event</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default HookTest;