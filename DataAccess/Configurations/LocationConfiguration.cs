using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Configurations
{
    public class LocationConfiguration : BaseEntityConfiguration, IEntityTypeConfiguration<Location>
    {
        public void Configure(EntityTypeBuilder<Location> builder)
        {
            base.Configure(builder);

            builder.Property(prop => prop.Latitude).IsRequired();

            builder.Property(prop => prop.Longitude).IsRequired();
            
            builder.Property(prop => prop.Time).IsRequired();
        }
    }
}
