import '@progress/kendo-ui';

export function setupGrid(element: HTMLElement) {
    const $: any = kendo.jQuery;
    $(element).kendoGrid({
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
}