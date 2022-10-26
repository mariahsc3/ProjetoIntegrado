using System.ComponentModel.DataAnnotations;

namespace APILojas.Models
{
    public class Cliente
    {
        [Key]
        [StringLength(5, MinimumLength = 1)]
        public string Id { get; set; }

        [StringLength(30, MinimumLength = 5, ErrorMessage = "O campo E-mail deve ter entre 5 e 30 caracteres")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "O campo senha deve ter entre 6 e 100 caracteres")]
        public string Senha { get; set; }
    }
}
