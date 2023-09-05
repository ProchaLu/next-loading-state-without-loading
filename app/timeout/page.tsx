function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default async function LoadingPage() {
  await delay();
  return (
    <div>
      <h1>Loading Page</h1>
    </div>
  );
}
