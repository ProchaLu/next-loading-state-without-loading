'use client';
import { useEffect, useState } from 'react';

function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default function LoadingState() {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    delay()
      .then(() => {
        setData(['one', 'two', 'three']);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h1>Loading Page</h1>
      {data.map((item) => {
        return <div key={`item-${item}`}>{item}</div>;
      })}
    </div>
  );
}
