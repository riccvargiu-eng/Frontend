const API_BASE_URL = "https://jsonplaceholder.typicode.com";
async function apiCall(endpoint) {
  try {
    //   console.log("API Call", `Chiamando: ${API_BASE_URL}${endpoint}`); dimostrare qual è l'endpoint
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Success", `Dati ricevuti da ${endpoint}`);
    return data;
  } catch (error) {
    console.log("API Error", `Errore per ${endpoint}: ${error.message}`);
    return null;
  }
}
//   console.log("TEST UTILITY FUNCTION", "Usiamo la funzione riutilizzabile"); test

async function fetchUser() {
  const users = await apiCall(`/users`);
  if (users) {
    console.log("Dati User ricevuti", users);
  }

  const ul = document.getElementById("ul");
  users.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML += `<div class="card">
  <h3>${element.name}</h3>
  <p> <strong>Username</strong>: ${element.username}</p>
<p> <strong>Email</strong>: ${element.email}</p>
  </div>`;
    ul.appendChild(li);
  });
}
fetchUser();
