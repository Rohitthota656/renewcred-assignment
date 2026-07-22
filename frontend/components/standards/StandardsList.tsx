import StandardsCard from "./StandardsCard";
import { getStandards } from "@/services/standardService";

export default async function StandardsList() {
    const standards = await getStandards();
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Standards
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {standards.map((item: any) => (
          <StandardsCard
            key={item.title}
            title={item.title}
            description={item.description}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}