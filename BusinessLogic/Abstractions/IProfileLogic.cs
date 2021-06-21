using DataAccess.Entities;
using Models;
using System;

namespace BusinessLogic.Abstractions
{
    public interface IProfileLogic
    {
        ProfileDto GetById(Guid userId);
        Profile Create(ProfileDto profileDto, Guid userId);
        Profile Update(ProfileDto profileDto, Guid userId);
    }
}
