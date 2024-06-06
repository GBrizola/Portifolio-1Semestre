const form = document.querySelector('[data-js="form-element"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = document.querySelectorAll('.usuario');
  const table = document.querySelector('[data-js="data-tabela"]');

  const value = `<tr data-js="data-tr">
                    <td>${data[0].value}</td>
                    <td>${data[1].value}</td>
                  </tr>`;

  table.insertAdjacentHTML('beforeend', value);

  form.reset();

  
});