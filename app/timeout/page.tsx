'use client';
import { useEffect, useState } from 'react';

function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

export default function LoadingPage() {
  const [data, setData] = useState<string[] | undefined>();
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
      {data?.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
