fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())  
.then(json => {
    const table = document.querySelector('table');
    json.filter(result => result.userId <= 3).map(result => {
      table.innerHTML += `
        <tr>
          <td class="results">${result.userId}</td>
          <td class="results">${result.title}</td>
          <td class="results">${result.completed ? 'Concluído' : 'Pendente'}</td>
        </tr>
      `
    });
  });
