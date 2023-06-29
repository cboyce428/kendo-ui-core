import { sampleProducts } from '../common/sample-products';
import '@progress/kendo-ui/esm/kendo.grid';

import * as nav from './HeaderNav';

(() => {
    nav.init();

    $(function() {
        gridInit("grid");
    });

    const gridInit = (id) => {
        $("#"+id).kendoGrid({
            dataSource: {
                data: sampleProducts,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { type: "number", editable: false },
                            ProductName: { type: "string" },
                            UnitPrice: { type: "number" },
                            UnitsInStock: { type: "number" },
                            Discontinued: { type: "boolean" }
                        }
                    }
                },
                pageSize: 20
            },
            height: 400,
            scrollable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            toolbar: [
                { name: "create" }
            ],
            editable: "inline",
            columns: [
                "ProductName",
                { field: "UnitsInStock", title: "Units In Stock", width: "130px" },
                { field: "Discontinued", width: "130px" },
                { command: ["edit", "destroy"] }
            ]
        });
    }
})();