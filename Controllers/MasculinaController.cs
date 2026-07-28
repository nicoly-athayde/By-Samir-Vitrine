using Microsoft.AspNetCore.Mvc;

namespace BySamir.Controllers
{
    public class MasculinaController : Controller
    {
        public IActionResult Blusas() => View();
        public IActionResult Bermudas() => View();
    }
}
