import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsString, Length, IsNumberString } from "class-validator";

export class MentorDTO {

    @ApiProperty({
        name: 'id',
        type: String,
        example: 'clw3qoybt0000mgjc3nuwr3uk',
    })
    @IsString()
    id: string;

    @ApiProperty({
        name: 'name',
        type: String,
        example: 'Leonardo Silva',
    })
    @IsString()
    name: string;

    @ApiProperty({
        name: 'cpf',
        type: String,
        example: '10083428070',
    })
    @IsNumberString()
    @Length(11)
    cpf: string;

    @ApiProperty({
        name: 'email',
        type: String,
        example: 'leonardo-silva@email.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        name: 'createdAt',
        type: String,
        example: '2024-05-12T16:18:33.546Z',
    })
    @IsDate()
    createdAt: Date;

    @ApiProperty({
        name: 'createdBy',
        description: 'account that created this item',
        type: String,
        example: 'clw3qoybt0000mgjc3nuwr3uk',
    })
    @IsString()
    createdBy: string;

    @ApiProperty({
        name: 'updatedAt',
        type: String,
        example: '2024-05-12T16:18:33.546Z',
    })
    @IsDate()
    updatedAt: Date;

    @ApiProperty({
        name: 'updatedBy',
        description: 'account that updated this item',
        type: String,
        example: 'clw3qoybt0000mgjc3nuwr3uk',
    })
    @IsString()
    updatedBy: string;
}