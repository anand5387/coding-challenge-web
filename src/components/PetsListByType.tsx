import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import User from "../model/User";
import Pet, { PetType } from "../model/Pet";
import MapHelpers from "../common/Helper";

const PetsListByType: React.FC = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [petType, setPetType] = useState<PetType>();

    const retrieveUsers = () => {
        UserService.getAll()
            .then((response: any) => {
                setUsers(response.data);
                //Change here to check different animals
                setPetType(PetType.Cat);

            })
    }

    const groupedByGender = () => {
        return MapHelpers.groupBy(users, "gender");
    }

    const simplifiedPets = () => {
        const petsList: Array<{ gender: string, pets: string[] }> = [];
        groupedByGender().forEach((users: [User], key: string) => {
            const currentList = users.map((user: User) => {
                const pets = user.pets as [Pet];
                return pets ? pets.filter(pet => pet.type === petType).map(pet => pet.name).sort() : [];
            }).flat();

            petsList.push({ gender: key, pets: currentList })
        });
        return petsList;
    }

    useEffect(() => {
        retrieveUsers();
      }, []);

    return (
        <div className="list row">
            <h5>Pet names sorted by names with owner gender type :: Filtered Pet - {petType}</h5>
            <div className="col-md-6">
                <ul className="list-group ">
                    {
                        simplifiedPets().flatMap((value, index) => (
                            <li className="list-group-item list-group-item-dark" key={value.gender} >
                                {value.gender}
                                <span className="ml-10 badge badge-primary badge-pill">{value.pets.length}</span>
                                <ul className="list-group list-group-flush">
                                    {
                                        value.pets && value.pets.length ?
                                        value.pets.map((innerValue, innerIndex) => (
                                            <li className="pl-4 list-group-item list-group-item-light" key= { index + "-" + innerIndex}>{innerValue}</li>
                                        )) : <li className="pl-4 list-group-item list-group-item-info" >Not available</li>
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default PetsListByType;
