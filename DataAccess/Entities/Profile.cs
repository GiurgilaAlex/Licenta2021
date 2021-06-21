using System;

namespace DataAccess.Entities
{
    public class Profile: BaseEntity
    {
        public string Name { get; set; }
        public byte[] Image { get; set; }
        public Guid UserId { get; set; }
    }
}
