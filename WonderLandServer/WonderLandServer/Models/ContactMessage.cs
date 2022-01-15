using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WonderLandServer.Models
{
    public class ContactMessage
    {
        [Key]
        public int ContactMessageId { get; set; }

        [Required]
        [StringLength(100)]
        public string email { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string message { get; set; }

    }
}
