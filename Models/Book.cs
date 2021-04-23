using System;

namespace Booksgalore.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Created_at { get; set; }

        public DateTime Updated_at { get; set; }

    }
}