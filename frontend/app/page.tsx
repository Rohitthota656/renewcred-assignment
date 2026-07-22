import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          RenewCred CMS
        </h1>
      </main>
    </>
  );
}