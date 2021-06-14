using BusinessLogic.Abstractions;
using DataAccess.Abstractions;
using DataAccess.Entities;
using Models;
using System;
using System.Collections.Generic;

namespace BusinessLogic.Implementations
{
    public class NoteLogic : BaseLogic, INoteLogic
    {
        public NoteLogic(IRepository repository): base(repository)
        {
        }

        public Note Create(NoteDto noteDto, Guid userId)
        {
            var newNote = new Note
            {
                Id = Guid.NewGuid(),
                Title = noteDto.Title,
                Description = noteDto.Description,
                NoteCreatedAt = noteDto.CreatedAt,
                UserId = userId
            };

            _repository.Insert(newNote);
            _repository.Save();

            return newNote;
        }

        public Note Delete(Guid noteId)
        {
            var note = _repository.GetByFilter<Note>(n => n.Id == noteId);

            _repository.Delete(note);
            _repository.Save();

            return note;
        }

        public IReadOnlyCollection<NoteDto> GetAll(Guid userId)
        {
            List<NoteDto> noteDtos = new List<NoteDto>();

            var notes = _repository.GetAllByFilter<Note>(n => n.UserId == userId);

            foreach (var note in notes)
            {
                var noteDto = new NoteDto
                {
                    Id = note.Id,
                    Title = note.Title,
                    Description = note.Description,
                    CreatedAt = note.NoteCreatedAt
                };

                noteDtos.Add(noteDto);
            }

            return noteDtos;
        }

        public NoteDto GetById(Guid noteId)
        {
            var note = _repository.GetByFilter<Note>(n => n.Id == noteId);

            if (note == null)
                return null;

            var noteDto = new NoteDto
            {
                Id = note.Id,
                Title = note.Title,
                Description = note.Description,
                CreatedAt = note.NoteCreatedAt
            };

            return noteDto;
        }

        public Note Update(NoteDto noteDto, Guid userId)
        {
            var note = _repository.GetByFilter<Note>(n => n.Id == noteDto.Id);
            note.Title = noteDto.Title;
            note.Description = noteDto.Description;
            note.NoteCreatedAt = noteDto.CreatedAt;
            note.UserId = userId;

            _repository.Update(note);
            _repository.Save();

            return note;
        }
    }
}
