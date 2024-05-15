import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumberString, IsString, Length } from "class-validator";


export class CreateMentorDTO  {
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
}