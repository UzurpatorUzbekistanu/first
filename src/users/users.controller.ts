import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './interface/users.interface';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService) {}

    @Get()
    findAll(): UserInterface[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): UserInterface {
        return this.usersService.findOne(id);
    }

}
