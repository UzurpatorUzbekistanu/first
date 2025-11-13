import { ApiProperty } from "@nestjs/swagger";
import { UserInterface } from "../interface/users.interface";

export class UsersDto implements UserInterface {
    @ApiProperty()
    @IsString
    id: string;
    @ApiProperty()
    @IsString
    name: string;
}