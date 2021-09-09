import { Request, Response } from "express";
import { User } from "modules/users/model/User";
import { usersRoutes } from "routes/users.routes";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


class ListAllUsersController {

    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

    handle(request: Request, response: Response): Response {
        const { user_id } = request.headers

        const userAdmin = this.listAllUsersUseCase.execute({ user_id })

        if (userAdmin) {

            return response.status(200).send(userAdmin)
        }

    }
}



export { ListAllUsersController };
