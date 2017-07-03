import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    login(username: string, password: string) {
        if(username === 'admin' && password === '1234'){
            localStorage.setItem('currentUser', username);
            return true;
        }
        // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}