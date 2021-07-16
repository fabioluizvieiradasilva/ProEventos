using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
         //PALESTRANTE
        Task<Palestrante[]> GetAllPalestrantesByNameAsync(string name, bool includeEventos);
         Task<Palestrante[]> GetAllPalestrantesAsync( bool includeEventos);
         Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos);
         
    }
}