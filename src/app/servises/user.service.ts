import { Injectable } from "@angular/core";
import { User } from "../models/contact.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private readonly localStorageKey = 'userData';


    user: User = {
      name: "",
      coins: 100,
      moves: [],
    };
  
    getUser(): User {
      return this.user;
    }
    getStoredUserData(): User {
        const storedData = localStorage.getItem(this.localStorageKey);
        return storedData ? JSON.parse(storedData) : this.user;
    }

    getLoggedinUser(newUser:string): User{
        let user = this.getStoredUserData()
        if (user.name === newUser) return user
        else {
            user = this.user
            user.name = newUser
            localStorage.setItem(this.localStorageKey, JSON.stringify(user));
            return user
        }
    }
}