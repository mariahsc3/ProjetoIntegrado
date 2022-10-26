using APILojas.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace APILojas.DBData
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {

        }

        public DbSet<Cliente> Cliente { get; set; }
    }
}
