const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/standards`;

export async function getStandards() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch standards");
  }

  return response.json();
}

export async function getStandard(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch standard");
  }

  return response.json();
}