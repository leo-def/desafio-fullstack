import React, { useMemo } from "react";
import * as yup from "yup";
import { Grid, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDisplayProps } from "../../commons/manage/_types/props/formDisplayProps";
import { DocService } from "../../commons/shared/_services/docService";
import { CPFInput } from "../../commons/shared/_components/CPFInput";
import { MentorFormInputs } from "../_types/mentorFormInputs";
import { MentorDto } from "../_types/mentor.dto";

export interface MentorFormDisplayProps extends FormDisplayProps<MentorDto> {
    readonly values?: MentorDto;
    readonly disabled?: boolean;
    readonly onSubmit?: (param: MentorDto) => Promise<MentorDto>;
    readonly id: string;
}

export function MentorFormDisplay({
    values,
    disabled,
    onSubmit,
    id,
}: MentorFormDisplayProps) {
    const schema = yup.object().shape({
        id: yup.string()
            .optional(),
        name: yup.string()
            .required("Name is required"),
        cpf: yup.string()
            .required("CPF is required")
            .test('is-cpf-valid', 'CPF inválido', DocService.validateCPF),
        email: yup.string()
            .email("Invalid email")
            .required("Email is required")
    })
    const defaultValues = useMemo(() => ({
        id: values?.id ?? '',
        name: values?.name ?? '',
        cpf: values?.cpf ?? '',
        email: values?.email ?? ''
    } as MentorFormInputs), [values])
    const { register, handleSubmit, formState: { errors } } = useForm<MentorFormInputs>({
        defaultValues,
        resolver: yupResolver<MentorFormInputs>(schema),
    });
    const onFormSubmit: SubmitHandler<MentorFormInputs> = async (data: MentorFormInputs) =>  onSubmit ? await onSubmit(data as MentorDto) : undefined;

    return (<form onSubmit={handleSubmit(onFormSubmit)} id={id}>
        <fieldset>
            <input
                type="hidden"
                disabled
                style={{ display: 'none' }}
                {...register('id')} />

            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="Name"
                        variant="standard"
                        disabled={disabled}
                        inputProps={register('name', { required: true })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        name="name" />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="CPF"
                        variant="standard"
                        disabled={disabled}
                        name="cpf"
                        InputProps={{
                            inputProps: register('cpf', { required: true }),
                            inputComponent: CPFInput as any
                        }}
                        error={!!errors.cpf}
                        helperText={errors.cpf?.message} />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="Email"
                        variant="standard"
                        disabled={disabled}
                        inputProps={register('email', { required: true })}
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email?.message} />
                </Grid>
            </Grid>
        </fieldset>
    </form>)
}
