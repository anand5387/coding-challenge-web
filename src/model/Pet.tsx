export enum PetType {
    Cat,
    Dog,
    Fish,
    Unknown
}

export interface Pet {
    name: string,
    type: PetType
}