using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;


namespace Booksgalore.Models
{
    public class User
    {
        public string FullName { get; set; }

        public string Email { get; set; }
        public string HashedPassword { get; set; }

        public string Password
        {
            set
            {
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }

        // public bool IsValidPassword(string password)
        // {
        //     var passwordVerification = PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);

        //     return passwordVerification == PasswordVerificationResults.Success;
        // }

        public List<FavoriteBook> FavoriteBooks { get; set; }

    }
}