
import { CharacterSummary } from "@/app/characters/_types/characters";
import { API_BASE_URL } from "@/constants/api";

export async function getCharacters ():Promise<CharacterSummary[]>{
    const res = await fetch(`${API_BASE_URL}/api/characters`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if(!res.ok){
        throw new Error(`Failed to fetch characters: ${res.status}`);
    }

    return res.json();
}

