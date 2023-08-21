import { cookies } from 'next/headers';

export default function Home() {
  const session = cookies().get('session')?.value;
  return (
    <main>
      <div>test</div>
      <div>Session: {session}</div>
    </main>
  );
}
