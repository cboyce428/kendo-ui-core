
$('#app').html(`
      <div id="grid" type="button"></div>
`);

const grid = new kendo.ui.Grid('#grid', {
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
