using Microsoft.AspNetCore.Mvc;

namespace volunteering_website.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
