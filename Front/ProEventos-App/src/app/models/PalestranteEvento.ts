import { Evento } from "./Evento";
import { Palestrante } from "./Palestrante";

export interface PalestranteEvento {
  palestranteId: number;
  palestrante: Palestrante;
  eventoId: number;
  evento: Evento;
}
