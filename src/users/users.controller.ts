import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService) {}

    @Get()
    findAll(): UsersDto[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): UsersDto {
        return this.usersService.findOne(id);
    }

}
