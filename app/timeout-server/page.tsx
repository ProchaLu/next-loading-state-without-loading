// create a page with a timeout server side

function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default async function LoadingPageServer() {
  await delay();
  return (
    <main>
      <h1>Timeout Server</h1>
    </main>
  );
}
