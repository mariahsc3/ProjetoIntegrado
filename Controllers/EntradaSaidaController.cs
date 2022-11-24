using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APILojas.DBData;
using APILojas.Models;

namespace APILojas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntradaSaidaController : ControllerBase
    {
        private readonly APIDbContext _context;

        public EntradaSaidaController(APIDbContext context)
        {
            _context = context;
        }

        // GET: api/EntradaSaidas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EntradaSaida>>> GetEntradaSaida()
        {
            return await _context.EntradaSaida.ToListAsync();
        }

        // GET: api/EntradaSaidas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EntradaSaida>> GetEntradaSaida(int id)
        {
            var entradaSaida = await _context.EntradaSaida.FindAsync(id);

            if (entradaSaida == null)
            {
                return NotFound();
            }

            return entradaSaida;
        }

        // PUT: api/EntradaSaidas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntradaSaida(int id, EntradaSaida entradaSaida)
        {
            if (id != entradaSaida.Id)
            {
                return BadRequest();
            }

            _context.Entry(entradaSaida).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntradaSaidaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EntradaSaidas
        [HttpPost]
        public async Task<ActionResult<EntradaSaida>> PostEntradaSaida(EntradaSaida entradaSaida)
        {
            _context.EntradaSaida.Add(entradaSaida);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntradaSaida", new { id = entradaSaida.Id }, entradaSaida);
        }

        // DELETE: api/EntradaSaidas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntradaSaida(int id)
        {
            var entradaSaida = await _context.EntradaSaida.FindAsync(id);
            if (entradaSaida == null)
            {
                return NotFound();
            }

            _context.EntradaSaida.Remove(entradaSaida);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntradaSaidaExists(int id)
        {
            return _context.EntradaSaida.Any(e => e.Id == id);
        }
    }
}
