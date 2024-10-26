using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace volunteering_website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        // Sample Posts class
        public class Post
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = new List<Post>
            {
                new Post
                {
                    Id = 1,
                    Name = "mazen"
                }
            };

            return Ok(posts); // Return the list of posts as JSON
        }
    }
}
