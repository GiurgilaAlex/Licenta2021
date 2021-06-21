using BusinessLogic.Abstractions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using WebApi.Extensions;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProfileController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IProfileLogic _profileLogic;

        public ProfileController(IHttpContextAccessor httpContextAccessor, IProfileLogic profileLogic)
        {
            _httpContextAccessor = httpContextAccessor;
            _profileLogic = profileLogic;
        }

        [HttpPost]
        public IActionResult Create([FromBody] ProfileDto profileDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _httpContextAccessor.GetCurrentUserId();
            var profile = _profileLogic.Create(profileDto, userId);

            return Ok(profile);
        }

        [HttpPut]
        public IActionResult Update([FromBody] ProfileDto profileDto)
        {
            var userId = _httpContextAccessor.GetCurrentUserId();
            var result = _profileLogic.Update(profileDto, userId);
            
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet]
        public IActionResult GetById()
        {
            var userId = _httpContextAccessor.GetCurrentUserId();
            var result = _profileLogic.GetById(userId);

            if(result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
