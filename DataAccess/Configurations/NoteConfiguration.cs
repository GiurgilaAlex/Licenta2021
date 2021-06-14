using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Configurations
{
    public class NoteConfiguration: BaseEntityConfiguration, IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            base.Configure(builder);

            builder.Property(prop => prop.UserId).IsRequired();

            builder.Property(prop => prop.NoteCreatedAt).IsRequired();
            
            builder.Property(prop => prop.Title).IsRequired().HasMaxLength(100);
        }
    }
}
