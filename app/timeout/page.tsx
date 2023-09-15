import { cookies } from 'next/headers';

function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

export default async function LoadingPage() {
  const session = cookies().get('session')?.value;
  console.log(session);
  await delay();
  return (
    <div>
      <h1>Loading Page</h1>
    </div>
  );
}
