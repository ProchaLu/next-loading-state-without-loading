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
      {data.map((item) => {
        return <div key={`item-${item}`}>{item}</div>;
      })}
    </div>
  );
}
