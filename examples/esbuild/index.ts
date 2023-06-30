import '@progress/kendo-ui/js/kendo.core';
import '@progress/kendo-ui/js/kendo.grid';
// You can also import the kendo instance from the exported member in the module:
// import kendo from '@progress/kendo-ui/js/kendo.grid';

const $ = kendo.jQuery;

$('body').append('<div id="grid"></div>');

$('#grid').kendoGrid({
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

