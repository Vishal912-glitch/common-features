﻿namespace Serenity.Demo.Northwind {
    export namespace OrderService {
        export const baseUrl = 'Serenity.Demo.Northwind/Order';

        export declare function Create(request: SaveRequest<OrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: SaveRequest<OrderRow>, onSuccess?: (response: SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: OrderListRequest, onSuccess?: (response: ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Serenity.Demo.Northwind/Order/Create",
            Update = "Serenity.Demo.Northwind/Order/Update",
            Delete = "Serenity.Demo.Northwind/Order/Delete",
            Retrieve = "Serenity.Demo.Northwind/Order/Retrieve",
            List = "Serenity.Demo.Northwind/Order/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
