import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthServiceMock {
    loadUser() {
        return '{ "username": "Mike" }';
    }
}
