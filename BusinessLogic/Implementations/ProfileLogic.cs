using BusinessLogic.Abstractions;
using DataAccess.Abstractions;
using DataAccess.Entities;
using Models;
using System;

namespace BusinessLogic.Implementations
{
    public class ProfileLogic : BaseLogic, IProfileLogic
    {
        public ProfileLogic(IRepository repository) : base(repository)
        {
        }

        public Profile Create(ProfileDto profileDto, Guid userId)
        {
            var newProfile = new Profile
            {
                Id = Guid.NewGuid(),
                Image = profileDto.Image,
                Name = profileDto.Name,
                UserId = userId
            };

            _repository.Insert(newProfile);
            _repository.Save();

            return newProfile;
        }

        public ProfileDto GetById(Guid userId)
        {
            var profile = _repository.GetByFilter<Profile>(p => p.UserId.Equals(userId));

            if (profile ==null)
            {
                return null;
            }

            var profileDto = new ProfileDto
            {
                Name = profile.Name,
                Image = profile.Image
            };

            return profileDto;
        }

        public Profile Update(ProfileDto profileDto, Guid userId)
        {
            var profile = _repository.GetByFilter<Profile>(p => p.UserId.Equals(userId));

            profile.Name = profileDto.Name;
            profile.Image = profileDto.Image;

            _repository.Update(profile);
            _repository.Save();

            return profile;
        }
    }
}
