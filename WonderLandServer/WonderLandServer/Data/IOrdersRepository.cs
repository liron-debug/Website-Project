using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WonderLandServer.Data
{
    public interface IOrdersRepository<T> where T : class
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<T> SaveAsync(T entity);
    }
}
