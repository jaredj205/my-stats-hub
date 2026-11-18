async function loadStats() {
  const container = document.getElementById("stats");
  try {
    const res = await fetch("/api/stats");
    const stats = await res.json();
    container.innerHTML = stats
      .map(
        (s) => `<div class="card">
          <div class="source">${s.source}</div>
          <div>${s.metric}</div>
          <div class="value">${s.value}</div>
        </div>`
      )
      .join("");
  } catch (err) {
    container.textContent = "Could not load stats.";
  }
}
loadStats();