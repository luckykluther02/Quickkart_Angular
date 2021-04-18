using Quickkart.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Results;

namespace Quickkart.Services.Controllers
{
    interface IUserController
    {
        UserBL UserBL { get; }
        //int UserLogin(Common.Models.User user);
        //JsonResult<List<Common.Models.ViewCart>> ViewCart(Common.Models.User user);
        JsonResult<List<Common.Models.Product>> ViewProduct();
        //int AddToCart(Common.Models.Cart cart);
        //int UpdateCart(Common.Models.Cart cart);
        //int DeleteCart(Common.Models.Cart cart);
        //string ProductOrder(Common.Models.Cart cart);
        //JsonResult<List<Common.Models.ViewCart>> ViewOrders(Common.Models.User user);

    }
}
