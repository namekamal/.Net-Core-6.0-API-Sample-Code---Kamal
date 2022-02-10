using apiUser.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace apiUser.Data
{
    public class UserDBContext:DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {
        }
        public DbSet<Cities> cities { get; set; }
    }
}
