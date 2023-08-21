import { cookies } from 'next/headers';
import Image from 'next/image';

export default function Home() {
  const session = cookies().get('session')?.value;
  return (
    <main>
      <div>test</div>
      <div>Session: {session}</div>
      <Image src="/next.svg" alt="" width="300" height="300" />
    </main>
  );
}
