using DataAccess.Entities;
using Models;
using System;

namespace BusinessLogic.Abstractions
{
    public interface IAskMeLogic
    {
        Location Add(LocationDto locationDto, Guid userId);

        AnswerDto AskQuestion(QuestionDto questionDto, Guid userId);
    }
}
