using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WonderLandServer.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        [StringLength(100)]
        public string email { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        [StringLength(80)]
        public string address { get; set; }

        public string address2 { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string state { get; set; }

        [Required]
        public int zip { get; set; }

        public bool gridCheck { get; set; }

        [Required]
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
