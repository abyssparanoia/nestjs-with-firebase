import { Injectable } from '@nestjs/common';
import {User} from './users.interface';

@Injectable()
export class UsersService {
    private readonly users: User [];

    create(user: User) {
        this.users.push(user);
    }

    findAll() {
        return this.users;
    }
}
