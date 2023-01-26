"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: 'Name is required',
        }),
        password: (0, zod_1.string)({
            required_error: 'Password is required',
        }).min(6, "The password you entered is too short - it should be a minimum of 6 characters."),
        passwordConfirmation: (0, zod_1.string)({
            required_error: 'Password confirmation is required and must match the password',
        }),
        email: (0, zod_1.string)({
            required_error: 'Email is required',
        }).email("The email address provided is invalid"),
        highScore: (0, zod_1.number)({
            required_error: 'High score is required'
        }).int("The high score must be an integer").positive("The high score must be positive"), // checking that the high score is both positive and an integer
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});
