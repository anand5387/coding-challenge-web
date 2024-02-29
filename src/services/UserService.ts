import http from "./http-common";
import User from "../model/User";

const getAll = () => {
    return http.get<Array<User>>("/people.json");
}

const UserService = {
    getAll
}

export default UserService
