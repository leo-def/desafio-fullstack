import { Mentor as MentorModel } from "@prisma/client";

export interface IUpdateMentor extends Pick<
    MentorModel,
    'name' |
    'cpf' |
    'email' > {

    }

export class UpdateMentor implements IUpdateMentor {
    name: string;
    cpf: string;
    email: string;
}