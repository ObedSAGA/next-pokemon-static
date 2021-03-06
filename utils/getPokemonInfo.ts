import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


export const getPekemonInfo = async(nameorId: string) => { 

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameorId}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    }
}