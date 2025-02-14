﻿using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serenity.Demo.Northwind.CategoryLangRow;

namespace Serenity.Demo.Northwind
{
    public interface ICategoryLangDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoryLangDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryLangDeleteHandler
    {
        public CategoryLangDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}