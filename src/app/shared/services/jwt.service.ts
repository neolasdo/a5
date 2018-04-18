import {Injectable} from '@angular/core';

@Injectable()
export class JwtService {

    constructor() {
    }

    getUser(): Object {
        let user = localStorage.getItem('user');

        if (user !== 'undefined') {
            user = JSON.parse(user);
        }
        return user;
    }

    getToken() {
        return this.getUser() ? this.getUser()['token'] : '';
    }

    setUser(user: Object) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    destroyUser() {
        localStorage.removeItem('user');
    }

    getListUsers() {
        let list = localStorage.getItem('listUser');
        return list;
    }

    pushUser(user: Object) {
        let listUsers: Array<Object> = JSON.parse(this.getListUsers());
        listUsers.push(user);
        localStorage.setItem('listUser', JSON.stringify(listUsers));
    }

}
