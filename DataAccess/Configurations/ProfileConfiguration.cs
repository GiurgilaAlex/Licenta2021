using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Configurations
{
    public class ProfileConfiguration: BaseEntityConfiguration, IEntityTypeConfiguration<Profile>
    {
        public void Configure(EntityTypeBuilder<Profile> builder)
        {
            base.Configure(builder);
            
            builder.Property(prop => prop.Name).IsRequired();
            
            builder.Property(prop => prop.UserId).IsRequired();
        }
    }
}
