using Microsoft.AspNetCore.Mvc;

namespace BySamir.Controllers
{
    public class FemininaController : Controller
    {
        public IActionResult Blusas() => View();
        public IActionResult Calcas() => View();
        public IActionResult Vestidos() => View();
    }
}
