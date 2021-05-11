import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
