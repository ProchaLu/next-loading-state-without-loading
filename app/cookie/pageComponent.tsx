'use client';

import { ChangeEvent, useState } from 'react';
import { updateSession } from './actions';

export default function SetCookie() {
  const [session, setSession] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setSession(event.currentTarget.value);
  }

  return (
    <form>
      <textarea
        data-test-id="input-field"
        name="session"
        value={session}
        onChange={handleChange}
      />
      <button data-test-id="update-button" formAction={updateSession}>
        Update Session
      </button>
    </form>
  );
}
