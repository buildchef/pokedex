export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    types: PokemonType[];
    stats: PokemonStat[];
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
}

export interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}

export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: MoveVersionGroupDetail[];
}

export interface MoveVersionGroupDetail {
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
}

export interface PokemonSprites {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
    other?: Record<string, any>;
    versions?: Record<string, any>;
}

export interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
}

export interface HeldItem {
    item: NamedAPIResource;
    version_details: HeldItemVersion[];
}

export interface HeldItemVersion {
    version: NamedAPIResource;
    rarity: number;
}
