fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())  
.then(json => {
    const table = document.querySelector('table');
    json.filter(result => result.userId <= 3).map(result => {
      table.innerHTML += `
        <tr>
          <td class="results">${result.userId}</td>
          <td class="results">${result.title}</td>
          <td class="results">${result.body}</td>
        </tr>
      `
    });
  });
