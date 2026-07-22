const API_URL = "http://localhost:5000/api/standards";

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