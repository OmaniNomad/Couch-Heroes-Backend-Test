"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionLoginSchema = void 0;
const zod_1 = require("zod");
exports.sessionLoginSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: 'An email is required'
        }),
        password: (0, zod_1.string)({
            required_error: 'A password is required'
        })
    })
});
