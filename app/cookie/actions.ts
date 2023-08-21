'use server';

import { cookies } from 'next/headers';

export async function updateSession(formData: FormData) {
  const session = (await formData.get('session')) as string;

  cookies().set({
    name: 'session',
    value: JSON.stringify(session),
    sameSite: 'none',
    secure: true,
  });
}
