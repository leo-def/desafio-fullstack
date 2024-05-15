import { Mentor as MentorModel } from "@prisma/client";

export interface ICreateMentor extends Pick<
    MentorModel,
    'name' |
    'cpf' |
    'email'> {

}

export class CreateMentor implements ICreateMentor {
    name: string;
    cpf: string;
    email: string;
}