"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("../decorator/roles.decorator");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || 'djkealllaiwjfba4fhflwi';
let RolesGuard = exports.RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers['authorization'];
        const token = authorizationHeader?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('Missing token');
        }
        try {
            const decodedToken = jwt.verify(token, SECRET_KEY);
            const userRoles = decodedToken.roles || [];
            const hasRequiredRole = requiredRoles.some((role) => userRoles.includes(role));
            if (!hasRequiredRole) {
                throw new common_1.UnauthorizedException('Insufficient permissions');
            }
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Token verification failed: ' + error.message);
        }
    }
};
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map