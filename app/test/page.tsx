import { cookies } from 'next/headers';

export default function Test() {
  const session = cookies().get('session')?.value;
  return (
    <main>
      <div>Session: {session}</div>
    </main>
  );
}
