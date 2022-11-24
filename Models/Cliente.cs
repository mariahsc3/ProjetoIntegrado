using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APILojas.Models
{
    public class Cliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(30, MinimumLength = 5, ErrorMessage = "O campo E-mail deve ter entre 5 e 30 caracteres")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "O campo senha deve ter entre 6 e 100 caracteres")]
        public string Senha { get; set; }
    }
}
