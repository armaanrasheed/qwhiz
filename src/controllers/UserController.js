import { UserRepository } from '../repositories/UserRepository.js';

export class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAll(req, res) {
    try {
      const users = await this.userRepository.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
