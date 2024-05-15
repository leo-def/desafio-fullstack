import { Mentor as MentorModel } from "@prisma/client";

export interface IMentor extends Pick<
    MentorModel,
    'id' |
    'name' |
    'cpf' |
    'email' |
    'createdAt' |
    'createdBy' |
    'updatedAt' |
    'updatedBy' > {
    }

    export class Mentor implements IMentor {
        id: string;
        name: string;
        cpf: string;
        email: string;
        createdAt: Date;
        createdBy: string;
        updatedAt: Date;
        updatedBy: string;

    }