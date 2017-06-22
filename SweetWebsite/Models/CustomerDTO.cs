using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetWebsite.Models
{
    public class CustomerDTO
    {
        public int CustomerId { get; set; }
        public string CustomerForename { get; set; }
        public string CustomerSurname { get; set; }
        public string CustomerEmail { get; set; }
    }
}
