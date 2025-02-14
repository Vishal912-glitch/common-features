﻿namespace Serenity.Demo.Northwind {
    export namespace SalesByCategoryService {
        export const baseUrl = 'Serenity.Demo.Northwind/SalesByCategory';

        export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Serenity.Demo.Northwind/SalesByCategory/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>SalesByCategoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
