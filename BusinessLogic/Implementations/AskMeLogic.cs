using BusinessLogic.Abstractions;
using DataAccess.Abstractions;
using DataAccess.Entities;
using Models;
using System;
using System.Linq;

namespace BusinessLogic.Implementations
{
    public class AskMeLogic : BaseLogic, IAskMeLogic
    {
        private AnswerDto defaultAnswer;
        public AskMeLogic(IRepository repository) : base(repository)
        {
            defaultAnswer = new AnswerDto
            {
                Latitude = "0",
                Longitude = "0",
            };
        }

        public Location Add(LocationDto locationDto, Guid userId)
        {
            var newLocation = new Location
            {
                Id = Guid.NewGuid(),
                Latitude = locationDto.Latitude,
                Longitude = locationDto.Longitude,
                Date = locationDto.Date,
                Time = locationDto.Time,
                UserId = userId
            };

            _repository.Insert(newLocation);
            _repository.Save();

            return newLocation;
        }

        public AnswerDto AskQuestion(QuestionDto questionDto, Guid userId)
        {
            string time = string.Join("", questionDto.Question.Where(c => char.IsDigit(c) || c.Equals(':')));
            var location = _repository.GetByFilter<Location>(l => l.Time.Equals(time) && l.UserId.Equals(userId) && l.Date.Equals(questionDto.Date));

            if (location != null)
            {
                var answer = new AnswerDto
                {
                    Latitude = location.Latitude,
                    Longitude = location.Longitude
                };
                return answer;
            }
            else
            {
                return defaultAnswer;
            }
        }
    }
}
