using Quickkart.Services.Controllers;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace Quickkart.Services
{
    public class MyAuthorizationServiceProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            UserController obj = new UserController();
            int role = obj.UserLogin(context.UserName, context.Password);

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            if (role == 1)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                identity.AddClaim(new Claim("username", "admin"));
                identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "lucky02apr@gmail.com"));
                context.Validated(identity);
            }
            else if (role == 2)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
                identity.AddClaim(new Claim("username", "user"));
                identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "John078@gmail.com"));
                context.Validated(identity);
            }
            else
            {
                context.SetError("invalid_grant", "Provided username and password is incorrect");
                return;
            }
        }
    }
}