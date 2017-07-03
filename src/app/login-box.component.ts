import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credential } from './credential';


@Component({
  selector: 'login-box',
  templateUrl: 'login-box.component.html'
})
export class LoginBoxComponent implements OnInit{
    credential: Credential;
    returnUrl: string;
    loading = false;
    errorMsg = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.logout();
    }

    login() {
        this.errorMsg = '';

        if(this.credential.username === 'admin' && this.credential.password === '1234') {
            localStorage.setItem('currentUser', this.credential.username);
            this.router.navigate(['/list']);
        } else {
            this.loading = false;
            this.errorMsg = 'Invalid credentials';
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.credential = { username: '', password: ''};
    }
}