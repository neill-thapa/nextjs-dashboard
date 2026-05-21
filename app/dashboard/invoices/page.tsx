async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await wait(6000);

  return <h1>Invoices Page</h1>;
}
