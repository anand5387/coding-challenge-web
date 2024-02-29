import { Pet } from "./Pet"

export enum Gender {
    Male,
    Female
}

export interface User {
    name: string,
    gender: Gender,
    age: number
    pets: [Pet]
}