import { request } from "express";
import { usersRoutes } from "routes/users.routes";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}


class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) { }



    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id)
        if (user.admin === true) {
            const userList = this.usersRepository.list()
            return userList
        } else if (user.admin === false) {
            throw new Error("User not a admin");
        } else {
            throw new Error("User not exist");

        }




    }
}
export { ListAllUsersUseCase };
