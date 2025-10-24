const API_URL = import.meta.env.VITE_API_URL;

export async function register(username, name, password) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, name, password }),
    });
    if (res.ok) {
      const token = await res.json();
      localStorage.setItem("token", token.token);
      return token;
    }
  } catch (err) {
    console.log(err);
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
      const token = await res.json();
      localStorage.setItem("token", token.token);
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

export async function newReview(restId, text) {
  try {
    const res = await fetch(`${API_URL}/review/new/${restId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ text }),
    });
    if (res.ok) {
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getRestReviews(restId) {
  try {
    const res = await fetch(`${API_URL}/restaurant/${restId}/reviews`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const restReviews = await res.json();
      return restReviews;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUserReviews(userId) {
  try {
    const res = await fetch(`${API_URL}/user/${userId}/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if (res.ok) {
      const userReviews = await res.json();
      return userReviews;
    }
  } catch (err) {
    console.log(err);
  }
}