import Pet from "./Pet"

export enum Gender {
    Male = "Male",
    Female = "Female"
}

export  default interface User {
    name: string,
    gender: Gender,
    age: number
    pets: [Pet]
}