﻿namespace Serenity.Demo.Northwind {
    export namespace ShipperService {
        export const baseUrl = 'Serenity.Demo.Northwind/Shipper';

        export declare function Create(request: SaveRequest<ShipperRow>, onSuccess?: (response: SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: SaveRequest<ShipperRow>, onSuccess?: (response: SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Serenity.Demo.Northwind/Shipper/Create",
            Update = "Serenity.Demo.Northwind/Shipper/Update",
            Delete = "Serenity.Demo.Northwind/Shipper/Delete",
            Retrieve = "Serenity.Demo.Northwind/Shipper/Retrieve",
            List = "Serenity.Demo.Northwind/Shipper/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ShipperService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
