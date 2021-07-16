using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        //GERAL
         void Add<T>(T Entity) where T:class;
         void UpDate<T>(T Entity) where T:class;
         void Delete<T>(T Entity) where T:class;
         void DeleteRange<T>(T[] Entity) where T:class;
         Task <bool> SaveChangesAsync();
         
    }
}