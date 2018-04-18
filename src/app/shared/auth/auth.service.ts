import {Injectable} from '@angular/core';
import {JwtService} from '../services/jwt.service';
import {Users} from '../../../models/users';

@Injectable()
export class AuthService {
    user: Users = {
        id : 1,
        username: 'neolasdo',
        password: 'abc123'
    };
    constructor(private jwt: JwtService) {
    }

    private index: number;

    public getUser() {
        return this.jwt.getUser();
    }
    public isLoggedIn() {
        let token = this.jwt.getToken();

        if (token !== '' && token !== null) {
            return true;
        }

        return false;
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public login(user: string, password: string) {
        if (user.toLowerCase() === this.user.username.toLowerCase() && password === this.user.password) {
            this.user.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.' +
                'XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o';
            this.jwt.setUser(this.user);
        } else return;
    }

    public signup(user) {}

    public logout() {
        this.jwt.destroyUser();
    }
}
