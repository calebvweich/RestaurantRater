const API_URL = import.meta.env.VITE_API_URL;

export async function register(username, name, password) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, name, password }),
    });
    if (res.ok) {
      const token = await res.json()
      localStorage.setItem("token", token.token)
      return token;
    }
  } catch (err) {
    console.log(err)
  }
}

export async function login(username, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const token = await res.json()
      localStorage.setItem("token", token.token)
      return token;
    }
  } catch (err) {
    console.log(err);
  }
}

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
    console.log(err);
  }
}