import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUser(name: string){
    this.names.push(name);
  }

  get users(): string[]{
    return this.names;
  }

  private names: string[] = [];
}
