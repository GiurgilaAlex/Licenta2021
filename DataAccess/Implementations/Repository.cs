using DataAccess.Abstractions;
using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DataAccess.Implementations
{
    public class Repository : IRepository
    {
        private readonly ApplicationDbContext _context;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Delete<T>(T entity) where T : BaseEntity
        {
            _context.Set<T>().Remove(entity);
        }

        public IReadOnlyCollection<T> GetAll<T>() where T : BaseEntity
        {
            return _context.Set<T>().ToList();
        }

        public void Insert<T>(T entity) where T : BaseEntity
        {
            _context.Set<T>().Add(entity);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update<T>(T entity) where T : BaseEntity
        {
            _context.Set<T>().Update(entity);
        }

        public IReadOnlyCollection<T> GetAllByFilter<T>(Expression<Func<T, bool>> filter) where T : BaseEntity
        {
            return _context.Set<T>().Where(filter).ToList();
        }

        public T GetByFilter<T>(Expression<Func<T, bool>> filter) where T : BaseEntity
        {
           return _context.Set<T>().FirstOrDefault(filter);
        }
    }
}
