using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Study_Buddy_Backend.Models;

namespace Study_Buddy_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromptsController : ControllerBase
    {
        private readonly StudyBuddyContext _context;

        public PromptsController(StudyBuddyContext context)
        {
            _context = context;
        }

        // GET: api/Prompts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prompt>>> GetPrompts()
        {
          if (_context.Prompts == null)
          {
              return NotFound();
          }
            return await _context.Prompts.ToListAsync();
        }


        // GET: api/Prompts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Prompt>> GetPrompt(int id)
        {
          if (_context.Prompts == null)
          {
              return NotFound();
          }
            var prompt = await _context.Prompts.FindAsync(id);

            if (prompt == null)
            {
                return NotFound();
            }

            return prompt;
        }

        // PUT: api/Prompts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrompt(int id, Prompt prompt)
        {
            if (id != prompt.Id)
            {
                return BadRequest();
            }

            _context.Entry(prompt).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromptExists(id))
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

        // POST: api/Prompts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Prompt>> PostPrompt(Prompt prompt)
        {
          if (_context.Prompts == null)
          {
              return Problem("Entity set 'StudyBuddyContext.Prompts'  is null.");
          }
            _context.Prompts.Add(prompt);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrompt", new { id = prompt.Id }, prompt);
        }

        // DELETE: api/Prompts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrompt(int id)
        {
            if (_context.Prompts == null)
            {
                return NotFound();
            }
            Prompt prompt = await _context.Prompts.FindAsync(id);
            if (prompt == null)
            {
                return NotFound();
            }
            // Identify foreign key references and delete those first
            List<Favorited> matching = _context.Favoriteds.Where(f => f.PromptId == id).ToList();
            _context.Favoriteds.RemoveRange(matching);
            await _context.SaveChangesAsync();

            _context.Prompts.Remove(prompt);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromptExists(int id)
        {
            return (_context.Prompts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
