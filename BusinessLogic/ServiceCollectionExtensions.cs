using BusinessLogic.Abstractions;
using BusinessLogic.Implementations;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessLogic
{
    public static class ServiceCollectionExtensions
    {
        public static void AddBusinessLogic(this IServiceCollection services)
        {
            services.AddScoped<INoteLogic, NoteLogic>();
            services.AddScoped<IAskMeLogic, AskMeLogic>();
        }
    }
}
