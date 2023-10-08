using System.Text;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Persistence;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddIdentityCore<AppUser>(opt => 
            {
                opt.Password.RequireNonAlphanumeric = false;
            })

            .AddEntityFrameworkStores<DataContext>();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["jtipg6G6b2iT9425lc3jpbsibdqB2T5oAMTpzFnLPJ9VrHBJGx3dFY1O4OZ3zOsz"]));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer( opt => 
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new 
                            SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["jtipg6G6b2iT9425lc3jpbsibdqB2T5oAMTpzFnLPJ9VrHBJGx3dFY1O4OZ3zOsz"])),
                        ValidateIssuer = true,
                        ValidIssuer = "localhost",
                        ValidateAudience = true,
                        ValidAudience = "localhost"
                    };
                });



            services.AddScoped<TokenService>();

            return services;
        }
    }
}