import '@progress/kendo-ui';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">

    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">

    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <div id="grid" type="button"></div>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

kendo.jQuery('#grid').kendoGrid({
    dataSource: {
        data: [
            { id: 1, name: 'Jane Doe' },
            { id: 2, name: 'John Doe' }
        ],
    },
    columns: [
        { field: 'id' },
        { field: 'name' }
    ]
});