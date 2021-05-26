using System;
using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController: ControllerBase
    {
        public EventoController(){}

        [HttpGet]
        public Evento Get()
        {
            return new Evento(){
                EventoId = 1,
                Tema = "Angular 12 e .NET 5",
                Local = "Volta Redonda/RJ",
                Lote = "1º Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                ImagemURL = "foto.png"
            };
        }
        
    }
}