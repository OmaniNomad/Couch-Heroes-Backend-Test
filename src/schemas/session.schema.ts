import { object, string } from 'zod';

export const sessionLoginSchema = object({
    body: object({
        email: string({
            required_error: 'An email is required'
        }),
        password: string({
            required_error: 'A password is required'
        })
    })
})