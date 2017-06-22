using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetDB.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Created { get; set; }
    }
}
