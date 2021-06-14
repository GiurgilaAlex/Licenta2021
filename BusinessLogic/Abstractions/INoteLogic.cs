using DataAccess.Entities;
using Models;
using System;
using System.Collections.Generic;

namespace BusinessLogic.Abstractions
{
    public interface INoteLogic
    {
        Note Create(NoteDto noteDto, Guid userId);
        Note Update(NoteDto noteDto, Guid userId);
        Note Delete(Guid noteId);
        NoteDto GetById(Guid noteId);
        IReadOnlyCollection<NoteDto> GetAll(Guid userId);
    }
}
