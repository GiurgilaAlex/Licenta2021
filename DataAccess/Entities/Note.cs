using System;

namespace DataAccess.Entities
{
    public class Note: BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string NoteCreatedAt { get; set; }
        public Guid UserId { get; set; }
    }
}
