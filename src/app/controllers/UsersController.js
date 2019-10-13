import Users from "../models/Users";

class UsersController {
  async index(req, res) {
    const { name } = req.body;

    const user = await Users.findOne({ name });

    if (!user) {
      return res.status(400).json("Esse aluno não existe");
    }

    return res.json(user);
  }

  async store(req, res) {
    const { name, course, age } = req.body;

    const post = await Users.create({
      name,
      course,
      age
    });

    return res.json(post);
  }
}

export default new UsersController();
