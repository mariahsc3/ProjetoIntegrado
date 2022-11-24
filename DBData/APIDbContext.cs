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
        public DbSet<EntradaSaida> EntradaSaida { get; set; }
        public DbSet<Estoque> Estoque { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<Loja> Loja { get; set; }
    }
}
