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


        [HttpGet("prompt/{userId}")]
        // Return the list of prompts that is favorited by the person
        public async Task<ActionResult<IEnumerable<Prompt>>> GetFavoritedPrompts(int userId)
        {
            if (_context.Prompts == null)
            {
                return NotFound();
            }
            List<int> promptsToReturn = _context.Favoriteds.Where(x => x.UserId == userId).Select(x => x.PromptId).ToList();
            List<Prompt> promptsList = new List<Prompt>();
            foreach (Prompt p in _context.Prompts)
            {
                foreach(int i in promptsToReturn)
                {
                    if (i == p.Id)
                        promptsList.Add(p);
                }
            }

            return promptsList;
        }

        [HttpGet("user/{userId}")]
        // Check if a prompt is already favorited for the person
        public async Task<ActionResult<IEnumerable<int>>> GetUserFavorites(int userId)
        {
            if (_context.Prompts == null)
            {
                return NotFound();
            }
            return _context.Favoriteds.Where(x => x.UserId == userId).Select(x => x.PromptId).ToList();
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

        // Delete Favorite by prompt id
        [HttpDelete("prompt/{id}")]
        public async Task<IActionResult> DeleteFavoritedPrompt(int id)
        {
            if (_context.Favoriteds == null)
            {
                return NotFound();
            }
            int favoriteId = _context.Favoriteds.Where(x => x.PromptId == id).FirstOrDefault().Id;

            var favorited = await _context.Favoriteds.FindAsync(favoriteId);
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
