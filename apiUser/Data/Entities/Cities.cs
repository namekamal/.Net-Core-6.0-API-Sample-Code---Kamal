using System.ComponentModel.DataAnnotations;
namespace apiUser.Data.Entities
{
    public class Cities
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Phone is required")]
        public string Phone { get; set; }
        public string ?Email { get; set; }
    }
}
