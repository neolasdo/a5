import {Injectable} from '@angular/core';
import {JwtService} from '../services/jwt.service';
import {Users} from '../../../models/users';
import {ApiService} from '../services/api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import {User} from '../../modules/user/user.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

    user: Users = {
        id : 1,
        username: 'neolasdo',
        password: 'abc123'
    };
    constructor(private jwt: JwtService, private apiService: ApiService) {
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
    public getToken() {
        return this.jwt.getToken();
    }
    public login(email: string, password: string) {
        return this.apiService.post('coaches/login', {
            email,
            password
        }).pipe(map(
            res => {
                if (res.hasOwnProperty('error')) {

                } else {
                    const user = {
                        user: res.data.user,
                        token: res.data.token,
                    };

                    this.setSession(user);
                }
                return res;
            }));
    }
    private setSession(user) {
        this.jwt.setUser(user);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }


    public signup(user) {}

    public logout() {
        this.jwt.destroyUser();
    }
}
