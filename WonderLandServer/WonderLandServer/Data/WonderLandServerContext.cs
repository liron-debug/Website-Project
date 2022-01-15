using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WonderLandServer.Models;

namespace WonderLandServer.Data
{
    public class WonderLandServerContext : DbContext
    {
        public WonderLandServerContext (DbContextOptions<WonderLandServerContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
    }
}
