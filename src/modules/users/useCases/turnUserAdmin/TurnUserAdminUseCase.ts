import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    execute({ user_id }: IRequest): User {
        const user = this.usersRepository.findById(user_id)
        if (!user) {
            throw new Error("This user not exist")
        }
        else {

            this.usersRepository.turnAdmin(user)
            return user


        }
        // else {
        //     throw new Error("this user not exist")
        // }


    }
}

export { TurnUserAdminUseCase };
