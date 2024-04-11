using System.Threading.Tasks.Dataflow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using scoala_backend.Models;

namespace scoala_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EleviController : ControllerBase
    {
        private readonly ScoalaDbContext _context;

        public EleviController(ScoalaDbContext context)
        {
            _context = context;
        }

        static class Specializare 
        { 
            public const string Toate = "Toate";
            public const string MateInfo = "Matematica Informatica";
            public const string Uman = "Stiinte Umane";
            public const string BioChimie = "Biologie Chimie"; 
        }


        [HttpGet("filtru")]
        public async Task<ActionResult<List<Elev>>> GetElevii(string specializare = "", string text = "", double media = 0.0)
        {

            var elevi = await _context.Elevi.ToListAsync();

            if (text is not "")
                elevi = elevi
                    .Where(e => e.Prenume.Contains(text, StringComparison.OrdinalIgnoreCase) 
                                 || e.Nume.Contains(text, StringComparison.OrdinalIgnoreCase))
                    .ToList();

            if (media != 0.0)
                if (media > 0.0 && media <= 10.0)
                    elevi = elevi
                        .Where(e => e.Media == media)
                        .ToList();
                else
                    return BadRequest();

            switch (specializare)
            {
                case Specializare.MateInfo:
                    elevi = elevi.FindAll(e => e.Specializare == Specializare.MateInfo);
                    break;
                case Specializare.Uman:
                    elevi = elevi.FindAll(e => e.Specializare == Specializare.Uman);
                    break;
                case Specializare.BioChimie:
                    elevi = elevi.FindAll(e => e.Specializare == Specializare.BioChimie);
                    break;
                case Specializare.Toate:
                case "":
                    break;
                default:
                    return BadRequest();
            }
            return elevi;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Elev>>> GetElevi()
            => await _context.Elevi.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Elev>> GetElev(int id)
        {
            var elev = await _context.Elevi.FindAsync(id);
            if (elev is null)
                return NotFound();
            return elev;
        }

        [HttpPost()]
        public async Task<ActionResult<Elev>> PostElev(Elev elev)
        {
            _context.Elevi.Add(elev);
            await _context.SaveChangesAsync();
            return elev;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutElev(Elev elev, int id)
        {
            if (id != elev.Id)
                return BadRequest();
            var e = await _context.Elevi.FirstOrDefaultAsync(e => e.Id == id);
            if (e is null)
                return NotFound();

            e.Nume = elev.Nume;
            e.Prenume = elev.Prenume;
            e.DataNasterii = elev.DataNasterii;
            e.Specializare = elev.Specializare;
            e.Media = elev.Media;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Elev>> DeleteElev(int id)
        {
            var elev = await _context.Elevi.FindAsync(id);
            if (elev is null)
                return NotFound();

            _context.Remove(elev);
            await _context.SaveChangesAsync();
            return NoContent(); ;
        }

    }
}
