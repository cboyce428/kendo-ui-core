const kendo = require('@progress/kendo-ui/kendo.grid');

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