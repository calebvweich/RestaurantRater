const API_URL = import.meta.env.VITE_API_URL;

export async function getRestList() {
  try {
    const res = await fetch(`${API_URL}/getRestList`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const rests = await res.json();
      return rests;
    }
  } catch(err) {
    console.log(err)
  }
}