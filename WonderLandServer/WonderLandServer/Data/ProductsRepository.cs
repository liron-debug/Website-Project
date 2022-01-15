using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WonderLandServer.Data
{
    public class ProductsRepository<T> : IProductsRepository<T> where T : class
    {
        private readonly WonderLandServerContext _context;

        public ProductsRepository(WonderLandServerContext context)
        {
            _context = context;
        }
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            _context.Set<T>().Update(entity);
        }

        public async Task<T> SaveAsync(T entity)
        {
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
