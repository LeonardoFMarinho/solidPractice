import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params

        const user = this.showUserProfileUseCase.execute({ user_id })
        if (user.admin === true) {
            return response.status(200).json({ user })
        } else {
            return response.status(404).json({ error: "This user not exist" })
        }

    }
}

export { ShowUserProfileController };
