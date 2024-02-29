import React, { useState, useEffect, ChangeEvent } from "react";
import UserService from "../services/UserService";
import User from "../model/User";
import { PetType } from "../model/Pet";

const PetsListByType: React.FC = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const petType: PetType = PetType.Cat

    const retrieveUsers = () => {
        UserService.getAll()
            .then((response: any) => {
                setUsers(response.data);
                console.log(response.data);
            })
    }

    useEffect(() => {
        retrieveUsers();
      }, []);

    return (
        <div className="list row">
            <div>Pet Names Sorted By Name with Owner Gender Type</div>
            <div className="col-md-6">
                <ul className="list-group">
                    <li className="list-group-item">
                        Male
                        <ul className="list-group">
                            <li className="list-group-item" >Tom</li>
                            <li className="list-group-item" >Name {petType}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
       
    );
}

export default PetsListByType;

