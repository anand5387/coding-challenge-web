export enum PetType {
    Cat = "Cat",
    Dog = "Dog",
    Fish = "Fish",
    Unknown = "Unknowm"
}

export default interface Pet {
    name: string,
    type: PetType
}