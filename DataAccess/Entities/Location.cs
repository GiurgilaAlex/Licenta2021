using System;

namespace DataAccess.Entities
{
    public class Location: BaseEntity
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public Guid UserId { get; set; }
    }
}
