fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())  
.then(json => {
    const table = document.querySelector('table');
    json.filter(result => result.userId <= 3).map(result => {
      table.innerHTML += `
        <tr>
          <td class="results">${result.userId}</td>
          <td class="results">${result.id}</td>
          <td class="results">${result.title}</td>
        </tr>
      `
    });
  });
