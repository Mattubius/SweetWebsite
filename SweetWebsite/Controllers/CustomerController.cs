using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SweetDB.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SweetWebsite.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Models.CustomerDTO> Get()
        {
            using (SweetDBContext db = new SweetDBContext())
            {
                var customers = db.Customer.Select(r => new Models.CustomerDTO() { CustomerId = r.CustomerId, CustomerForename = r.Forename, CustomerSurname = r.Surname, CustomerEmail = r.Email }).ToList();
                return customers;
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Models.CustomerDTO customer)
        {
            Customer newCust = new Customer();
            using (SweetDBContext db = new SweetDBContext())
            {
                newCust.Forename = customer.CustomerForename;
                newCust.Surname = customer.CustomerSurname;
                newCust.Email = customer.CustomerEmail;
                newCust.Created = DateTime.Now;
                db.Customer.Add(newCust);
                var ret = db.SaveChanges();
            }

            return Ok(new Models.CustomerDTO() { CustomerId = newCust.CustomerId, CustomerForename = newCust.Forename, CustomerSurname = newCust.Surname, CustomerEmail = newCust.Email });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Models.CustomerDTO customer)
        {
            using (SweetDBContext db = new SweetDBContext())
            {
                var cust = db.Customer.FirstOrDefault(r => r.CustomerId == id);
                if (cust != null)
                {
                    cust.Forename = customer.CustomerForename;
                    cust.Surname = customer.CustomerSurname;
                    cust.Email = customer.CustomerEmail;
                    db.SaveChanges();
                    return Ok(new Models.CustomerDTO() { CustomerId = id, CustomerForename = cust.Forename, CustomerSurname = cust.Surname, CustomerEmail = cust.Email});
                }
            }

            return NotFound();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            using (SweetDBContext db = new SweetDBContext())
            {
                var cust = db.Customer.FirstOrDefault(r => r.CustomerId == id);
                if (cust != null)
                {
                    db.Customer.Remove(cust);
                    db.SaveChanges();
                    return Ok(cust);
                }
            }

            return NotFound();
        }
    }
}
