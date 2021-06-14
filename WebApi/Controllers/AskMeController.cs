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
    public class AskMeController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IAskMeLogic _askMeLogic;

        public AskMeController(IAskMeLogic askMeLogic, IHttpContextAccessor httpContextAccessor)
        {
            _askMeLogic = askMeLogic;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost("location")]
        public IActionResult Create([FromBody] LocationDto locationDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _httpContextAccessor.GetCurrentUserId();
            var location = _askMeLogic.Add(locationDto, userId);

            return Ok(location);
        }

        [HttpPost("question")]
        public IActionResult AskQuestion([FromBody] QuestionDto questionDto)
        {
            var userId = _httpContextAccessor.GetCurrentUserId();
            var answer = _askMeLogic.AskQuestion(questionDto, userId);

            return Ok(answer);
        }
    }
}
