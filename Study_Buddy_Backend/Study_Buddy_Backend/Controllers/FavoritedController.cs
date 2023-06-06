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
    public class FavoritedController : ControllerBase
    {
        private readonly StudyBuddyContext _context;

        public FavoritedController(StudyBuddyContext context)
        {
            _context = context;
        }

        // GET: api/Favorited
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favorited>>> GetFavoriteds()
        {
          if (_context.Favoriteds == null)
          {
              return NotFound();
          }
            return await _context.Favoriteds.ToListAsync();
        }

        // GET: api/Favorited/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Favorited>> GetFavorited(int id)
        {
          if (_context.Favoriteds == null)
          {
              return NotFound();
          }
            var favorited = await _context.Favoriteds.FindAsync(id);

            if (favorited == null)
            {
                return NotFound();
            }

            return favorited;
        }

        // PUT: api/Favorited/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavorited(int id, Favorited favorited)
        {
            if (id != favorited.Id)
            {
                return BadRequest();
            }

            _context.Entry(favorited).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoritedExists(id))
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

        // POST: api/Favorited
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Favorited>> PostFavorited(Favorited favorited)
        {
          if (_context.Favoriteds == null)
          {
              return Problem("Entity set 'StudyBuddyContext.Favoriteds'  is null.");
          }
            _context.Favoriteds.Add(favorited);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavorited", new { id = favorited.Id }, favorited);
        }

        // DELETE: api/Favorited/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorited(int id)
        {
            if (_context.Favoriteds == null)
            {
                return NotFound();
            }
            var favorited = await _context.Favoriteds.FindAsync(id);
            if (favorited == null)
            {
                return NotFound();
            }

            _context.Favoriteds.Remove(favorited);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoritedExists(int id)
        {
            return (_context.Favoriteds?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
