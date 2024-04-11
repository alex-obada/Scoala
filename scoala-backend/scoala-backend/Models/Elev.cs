using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace scoala_backend.Models
{
    public class Elev
    {
        [Key, Required]
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public string Nume { get; set; } = null!;
        
        [Required, MaxLength(100)]
        public string Prenume { get; set; } = null!;

        [Required]
        public DateTime DataNasterii { get; set; }

        [MaxLength(25)]
        public string? Specializare { get; set; }

        public double? Media { get; set; }
    }
}
