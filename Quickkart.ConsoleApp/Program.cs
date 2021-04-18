using Quickkart.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quickkart.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            UserRepository obj = new UserRepository();
            //User Login
            //int res = obj.UserLogin("Helena34@gmail.com", "Helena@123");
            //Console.WriteLine(res);

            //View Cart
            //    SqlDataReader reader = obj.ViewCart("Helena34@gmail.com");
            //if (reader.HasRows)
            //{
            //    while (reader.Read())
            //    {
            //        Console.WriteLine(reader[0].ToString() + " " + reader["Price"].ToString() + " " + reader[2].ToString() + " " + reader[3].ToString());
            //    }
            //}
            //reader.Close();

            //View Products
            //SqlDataReader reader = obj.ViewProducts();
            //if (reader.HasRows)
            //{
            //    while (reader.Read())
            //    {
            //        Console.WriteLine(reader[0].ToString() + " " + reader[1].ToString() + " " + reader[2].ToString() + " " + reader[3].ToString() + " " + reader[4].ToString());
            //    }
            //}
            //reader.Close();

            //Add to Cart
            //int result = 0;
            //result = obj.AddToCart("John078@gmail.com", "P105", 1);
            //Console.WriteLine(result);

            //Update Cart
            //int result = 0;
            //result = obj.UpdateCart("John078@gmail.com", "P105", 3);
            //Console.WriteLine(result);

            //Delete from Cart
            //int result = 0;
            //result = obj.DeleteFromCart("John078@gmail.com", "P104");
            //Console.WriteLine(result);

            //Order Products
            //string orderId;
            //int result = 0;
            //result = obj.ProductOrder("John078@gmail.com", out orderId);
            //Console.WriteLine(result);

            //View Orders
            //SqlDataReader reader = obj.ViewOrders("John078@gmail.com");
            //if (reader.HasRows)
            //{
            //    while (reader.Read())
            //    {
            //        Console.WriteLine(" "+reader[0]+" "+reader[1]+" "+reader[2]+" "+reader[3]+" "+reader[4]);
            //    }
            //}

        }
    }
}
