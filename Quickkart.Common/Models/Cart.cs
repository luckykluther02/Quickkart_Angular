﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quickkart.Common.Models
{
    public class Cart
    {
        public int CartId { get; set; }
        [Required]
        public string ProductId { get; set; } = "P101";
        [Required]
        public string EmailId { get; set; } = "Helena34@gmail.com";
        [Required]
        public int QuantityPurchased { get; set; } = 1;
        public float TotalAmount { get; set; }
        public string OrderId { get; set; }
        public string Status { get; set; }
        public string OrderDate { get; set; }
        public string ProductName { get; set; }
        public float Price { get; set; }
        public int QuantityAvailable { get; set; } 

    }
}
