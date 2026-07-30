using Microsoft.AspNetCore.Mvc;

namespace BySamir.Controllers
{
    public class FemininaController : Controller
    {
        public IActionResult Blusas() => View();
        public IActionResult Calcas() => View();
        public IActionResult Vestidos() => View();

        public IActionResult CroppedCaju() => View();
        public IActionResult BataAssimetricaVerde() => View();
        public IActionResult CroppedLemon() => View();
        public IActionResult MalhaFria() => View();
        public IActionResult BodyRendado() => View();
        public IActionResult BataAssimetricaBranca() => View();
    }
}
