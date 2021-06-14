using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstractions
{
    public interface IRepository
    {
        void Insert<T>(T entity)
            where T : BaseEntity;

        void Update<T>(T entity)
            where T : BaseEntity;

        T GetByFilter<T>(Expression<Func<T, bool>> filter)
            where T : BaseEntity;

        IReadOnlyCollection<T> GetAllByFilter<T>(Expression<Func<T, bool>> filter)
            where T : BaseEntity;

        IReadOnlyCollection<T> GetAll<T>()
            where T : BaseEntity;

        void Delete<T>(T entity)
            where T : BaseEntity;

        void Save();
    }
}
