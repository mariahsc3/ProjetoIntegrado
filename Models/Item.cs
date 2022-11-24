using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APILojas.Models
{
    public class Item
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public string PrecoPorUn { get; set; }
        [Required]
        public int Quantidade { get; set; }
        [Required]
        public string ValorTotalEmProd { get; set; }
    }
}
