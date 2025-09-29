// script.js
document.getElementById('enterBtn').addEventListener('click', () => {
  document.querySelector('.intro').style.display = 'none';
  document.getElementById('content').classList.remove('hidden');
});

// Sample location data
    const locations = [
      {
        name: "Golden Gate Bridge",
        description: "A famous suspension bridge in San Francisco."
      },
      {
        name: "Statue of Liberty",
        description: "Iconic national monument located in New York Harbor."
      },
      {
        name: "Eiffel Tower",
        description: "A wrought-iron lattice tower in Paris, France."
      }
    ];

    function searchLocation() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const resultDiv = document.getElementById('results');
      const match = locations.find(loc => loc.name.toLowerCase().includes(input));

      if (match) {
        resultDiv.innerHTML = `
          <h3>${match.name}</h3>
          <p>${match.description}</p>
        `;
      } else {
        resultDiv.innerHTML = `<p>No location found with that name.</p>`;
      }
    }
