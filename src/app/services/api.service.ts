import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  env: string = environment.api;

  constructor() { }

  // Register
  public registerUser(email: string, password: string, first_name: string, last_name: string, role: 'admin' | 'user') {
    const user = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      role: role
    };

    axios.post(this.env + '/auth/register', user)
      .then(response => {
        console.log("User registered:", response.data);
      })
      .catch(error => {
        console.error("Registration error:", error);
      })
  }
}
