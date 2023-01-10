"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.CredentialsRequestBody = exports.NewUserRequest = void 0;
const tslib_1 = require("tslib");
// Uncomment these imports to begin using these cool features!
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const bcryptjs_1 = require("bcryptjs");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
let NewUserRequest = class NewUserRequest extends authentication_jwt_1.User {
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NewUserRequest.prototype, "password", void 0);
NewUserRequest = (0, tslib_1.__decorate)([
    (0, repository_1.model)()
], NewUserRequest);
exports.NewUserRequest = NewUserRequest;
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            minLength: 8,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
let UserController = class UserController {
    constructor(jwtService, userService, user, userRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.userRepository = userRepository;
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        const realm = user.realm;
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        const role = userProfile.name;
        return { token, role, realm };
    }
    async whoAmI(currentUserProfile) {
        // const role = currentUserProfile[securityId];
        const role = currentUserProfile.name;
        return { role };
    }
    async findById(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async signUp(newUserRequest) {
        const password = await (0, bcryptjs_1.hash)(newUserRequest.password, await (0, bcryptjs_1.genSalt)());
        const savedUser = await this.userRepository.create(lodash_1.default.omit(newUserRequest, 'password'));
        await this.userRepository.userCredentials(savedUser.id).create({ password });
        return savedUser;
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                }
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)(exports.CredentialsRequestBody)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "login", null);
(0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/whoami', {
        responses: {
            '200': {
                description: 'Return current user',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                role: {
                                    type: 'string',
                                }
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "whoAmI", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}'),
    (0, rest_1.response)(200, {
        description: 'User model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(authentication_jwt_1.User, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(authentication_jwt_1.User, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/signup', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': authentication_jwt_1.User,
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(NewUserRequest, {
                    title: 'NewUser',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [NewUserRequest]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "signUp", null);
UserController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    (0, tslib_1.__param)(2, (0, core_1.inject)(security_1.SecurityBindings.USER, { optional: true })),
    (0, tslib_1.__param)(3, (0, repository_1.repository)(authentication_jwt_1.UserRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, authentication_jwt_1.MyUserService, Object, authentication_jwt_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map