using Quickkart.Business;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Web.Http;
using System.Web.Http.Results;

namespace Quickkart.Services.Controllers
{
    public class UserController : ApiController, IUserController
    {
        private UserBL userBL;
        public UserBL UserBL { get { return userBL; } }

        public UserController()
        {
            userBL = new UserBL();
        }

        public UserController(UserBL userBL)
        {
            this.userBL = userBL;
        }

        [HttpPost]
        public int RegisterUser(Common.Models.User user)
        {
            int result = 0;
            try
            {
                result = userBL.RegisterUser(user);
            }
            catch
            {
                result = 0;
            }
            return result;
        }

        [HttpPost]
        public int UserLogin(string email, string password)
        {
            int result = 0;
            try
            {
                result = userBL.UserLogin(email, password);
            }
            catch
            {
                result = 0;
            }
            return result;
        }

        [HttpGet]
        public JsonResult<List<Common.Models.Cart>> ViewCart(string email)
        {
            List<Common.Models.Cart> lstCart = new List<Common.Models.Cart>();
            try
            {
                lstCart = userBL.ViewCart(email);
            }
            catch
            {
                lstCart = null;
            }
            return Json(lstCart);
        }

        [Authorize(Roles="admin")]
        [HttpGet]
        public JsonResult<List<Common.Models.Product>> ViewProduct()
        {
            List<Common.Models.Product> lstProduct = new List<Common.Models.Product>();
            try
            {
                lstProduct = userBL.ViewProduct();
            }
            catch
            {
                lstProduct = null;
            }
            return Json(lstProduct);
        }

        [HttpPost]
        public int AddToCart(Common.Models.Cart cart)
        {
            int result = 0;
            try
            {
                result = userBL.AddToCart(cart);
            }
            catch
            {
                result = 0;
            }
            return result;
        }

        [HttpPut]
        public int UpdateCart(Common.Models.Cart cart)
        {
            int result = 0;
            try
            {
                result = userBL.UpdateCart(cart);
            }
            catch
            {
                result = 0;
            }
            return result;
        }

        [HttpDelete]
        public int DeleteCart(string email, string prodId)
        {
            int result = 0;
            try
            {
                result = userBL.DeleteCart(email, prodId);
            }
            catch
            {
                result = 0;
            }
            return result;
        }

        [HttpPost]
        public string ProductOrder(string emailId)
        {
            string orderId = null;
            try
            {
                orderId = userBL.Order(emailId);
            }
            catch
            {
                orderId = null;
            }
            return orderId;
        }

        [Authorize]
        [HttpGet]
        public JsonResult<List<Common.Models.Cart>> ViewOrders(string emailId)
        {
            List<Common.Models.Cart> lstOrder = new List<Common.Models.Cart>();
            try
            {
                lstOrder = userBL.ViewOrders(emailId);
            }
            catch
            {
                lstOrder = null;
            }
            return Json(lstOrder);
        }
    }
}
