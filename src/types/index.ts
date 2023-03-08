export interface Character {
    name: string,
    id: string,
    side: string,
    description: string,
    force: {
        power: string,
        midichlorian: number
    }
}

export interface characterChangeEvent {
    character: Character,
    index: number
}