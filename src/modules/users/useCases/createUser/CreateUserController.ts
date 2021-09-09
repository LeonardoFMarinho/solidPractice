import { Response, Request } from "express";
import { User } from "modules/users/model/User";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    handle(request: Request, response: Response): Response {

        const { name, email } = request.body

        const userCreated = this.createUserUseCase.execute({ name, email })

        return response.status(201).json({ userCreated })


        // else {
        //     return response.status(400).send("UserExists")
        // }
    }

}


export { CreateUserController };
