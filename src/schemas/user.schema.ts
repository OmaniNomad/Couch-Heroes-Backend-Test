import { object, string, number, TypeOf } from 'zod';

export const registerUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required',
        }),
        password: string({
            required_error: 'Password is required',
        }).min(6, "The password you entered is too short - it should be a minimum of 6 characters."),
        passwordConfirmation: string({
            required_error: 'Password confirmation is required and must match the password',
        }),
        email: string({
            required_error: 'Email is required',
        }).email("The email address provided is invalid"),
        highScore: number({
            required_error: 'High score is required'
        }).int("The high score must be an integer").positive("The high score must be positive"), // checking that the high score is both positive and an integer
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});

export type RegisterUserInput = TypeOf<typeof registerUserSchema>