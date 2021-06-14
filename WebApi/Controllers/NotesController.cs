using BusinessLogic.Abstractions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApi.Extensions;

namespace WebApi.Controllers
{
    [Route("api/notes")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class NotesController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly INoteLogic _noteLogic;

        public NotesController(IHttpContextAccessor httpContextAccessor, INoteLogic noteLogic)
        {
            _httpContextAccessor = httpContextAccessor;
            _noteLogic = noteLogic;
        }

        [HttpPost]
        public IActionResult Create([FromBody] NoteDto noteDto)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _httpContextAccessor.GetCurrentUserId();
            var note = _noteLogic.Create(noteDto, userId);

            return Ok(note);
        }

        [HttpPut]
        public IActionResult Update([FromBody] NoteDto noteDto)
        {
            var userId = _httpContextAccessor.GetCurrentUserId();

            var result = _noteLogic.Update(noteDto, userId);

            if(result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpDelete("{noteId:guid}")]
        public IActionResult Delete([FromRoute] Guid noteId)
        {
            var result = _noteLogic.Delete(noteId);

            if(result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet]
        public IReadOnlyCollection<NoteDto> GetAll()
        {
            var userId = _httpContextAccessor.GetCurrentUserId();

            var notes = _noteLogic.GetAll(userId);

            return notes;
        }

        [HttpGet("{noteId:guid}")]
        public IActionResult GetById([FromRoute] Guid noteId)
        {
            var result = _noteLogic.GetById(noteId);

            if(result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
