import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/standards/Sidebar";
import Footer from "@/components/footer/Footer";
import { standards } from "@/lib/standards";

export default async function StandardDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const standard =
    standards[id as keyof typeof standards] ?? standards.ev;

  return (
    <>
      <Navbar />

      <div id="top" className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="mb-14">
          <span className="inline-block rounded-full bg-red-100 text-red-600 px-4 py-2 text-sm font-medium">
            RenewCred Standard
          </span>

          <h1 className="text-5xl font-bold mt-6">
            {standard.title}
          </h1>

          <p className="text-lg text-gray-600 mt-6 max-w-3xl leading-8">
            {standard.description}
          </p>
        </section>

        <div className="flex gap-10">
          <Sidebar />

          <div className="flex-1 space-y-16">
            {standard.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-3xl font-bold mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-600 leading-8">
                  {section.content}
                </p>
              </section>
            ))}

            <div className="mt-20">
              <a
                href="#top"
                className="text-red-600 font-semibold hover:underline"
              >
                ↑ Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}