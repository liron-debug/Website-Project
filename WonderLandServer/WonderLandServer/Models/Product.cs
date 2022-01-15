using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WonderLandServer.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }

        [Required]
        [StringLength(70)]
        public string category { get; set; }

        [Required]
        public string img { get; set; }

        [Required]
        public string title { get; set; }

        [Required]
        public string description { get; set; }

        [Required]
        public float price { get; set; }

        //public int quantity { get; set; }

        // One to many with orders table
        //public virtual Order Orders { get; set; }
    }
}
