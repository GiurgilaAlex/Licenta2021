using Microsoft.AspNetCore.Http;
using System;
using System.Security.Claims;

namespace WebApi.Extensions
{
    internal static class HttpContextAccessorExtensions
    {
        public static Guid GetCurrentUserId(this IHttpContextAccessor accessor)
        {
            var idString = accessor.HttpContext?.User.FindFirstValue("Id");
            return string.IsNullOrEmpty(idString) ? Guid.Empty : new Guid(idString);
        }
    }
}
