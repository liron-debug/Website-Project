using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WonderLandServer.Data;
using WonderLandServer.Models;

namespace WonderLandServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactMessagesController : ControllerBase
    {
        private readonly WonderLandServerContext _context;

        public ContactMessagesController(WonderLandServerContext context)
        {
            _context = context;
        }

        // GET: api/ContactMessages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetContactMessages()
        {
            return await _context.ContactMessages.ToListAsync();
        }

        // GET: api/ContactMessages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactMessage>> GetContactMessage(int id)
        {
            var contactMessage = await _context.ContactMessages.FindAsync(id);

            if (contactMessage == null)
            {
                return NotFound();
            }

            return contactMessage;
        }

        

        // POST: api/ContactMessages
        [HttpPost]
        public async Task<ActionResult<ContactMessage>> PostContactMessage(ContactMessage contactMessage)
        {
            _context.ContactMessages.Add(contactMessage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactMessage", new { id = contactMessage.ContactMessageId }, contactMessage);
        }
        
    }
}
