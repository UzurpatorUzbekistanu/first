import { Injectable } from '@nestjs/common';
import { UserInterface } from './interface/users.interface';
import { CreateUserDto, UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {

    private users: UserInterface[] = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' }
    ];

    findAll(): UserInterface[] {
        console.log('Finding all users');
        return this.users;
    }

    findOne(id: string): UserInterface {
        const user = this.users.filter(user => user.id === id)[0];
        console.log(`Finding user with id: ${id}`, user);
        return user;
    }

    createUser(dto: CreateUserDto): UserInterface {
        this.users.push(dto);
        console.log('Creating user:', dto);
        return dto;
    }
}
