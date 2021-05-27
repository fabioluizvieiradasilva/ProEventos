using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly DataContext _context;
        public EventoController(DataContext context)
        {
            _context = context;

        }


        [HttpGet]
        [Route("")]
        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }

        [HttpGet]
        [Route("{id:int}")]
        public Evento GetById(int id)
        {
            return _context.Eventos.FirstOrDefault(x => x.EventoId == id);
        }

    }
}