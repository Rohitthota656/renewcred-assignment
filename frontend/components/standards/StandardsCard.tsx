import Link from "next/link";    
type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function StandardsCard({
  title,
  description,
  slug,
}: Props) {
  return (
    <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <Link
  href={`/standards/${slug}`}
  className="text-red-600 font-semibold"
>
  Read More →
</Link>
    </div>
  );
}