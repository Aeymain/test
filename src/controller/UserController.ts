import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { Friend } from "../entity/Friend"

export class UserController {

  private userRepository = AppDataSource.getRepository(User)
  private friendsRepository = AppDataSource.getRepository(Friend)

  async all(request: Request, response: Response, next: NextFunction) {
    const data = await this.friendsRepository.find()
    console.log({data})
    return this.userRepository.find()

  }

 /* async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body)
  }
/*
  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
    await this.userRepository.remove(userToRemove)
  }

  async friend(request: Request, response: Response, next: NextFunction) {
    console.log("called")
    // let friends = await this.friendsRepository.find();

    // return friends
    
  }
  */
}