import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UsersDto } from './dto/users.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users API')
export class UsersController {

    constructor(
        private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse(
        { status: 200, description: 'List of users', type: [UsersDto] })
    findAll(): UsersDto[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiResponse(
        { status: 200, description: 'User details', type: UsersDto })
    findOne(@Param('id') id: string): UsersDto {
        return this.usersService.findOne(id);
    }

    @Post('create')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse(
        { status: 201, description: 'The user has been successfully created.', type: UsersDto })
    createUser(@Body() dto: CreateUserDto): UsersDto {
        
        return this.usersService.createUser(dto); 
    }

}
