using Microsoft.EntityFrameworkCore;

namespace scoala_backend.Models
{
    public class ScoalaDbContext : DbContext
    {
        public ScoalaDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Elev> Elevi {  get; set; }
    }
}
