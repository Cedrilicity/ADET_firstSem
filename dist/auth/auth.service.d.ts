import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private pool;
    createUser(username: string, password: string, role?: string): Promise<{
        id: number;
        username: string;
        role: string;
    }>;
    validateUser(username: string, pass: string): Promise<{
        id: any;
        username: any;
        role: any;
    } | null>;
    login(user: {
        id: number;
        username: string;
        role: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<{
        ok: boolean;
    }>;
    refreshTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
