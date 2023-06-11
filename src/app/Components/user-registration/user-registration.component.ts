import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Iuser } from 'src/app/Models/iuser';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userForm: FormGroup;
  user:Iuser ={} as Iuser;
  constructor(private fb: FormBuilder,private userService:UserService,private route:Router) {

    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required] , Validators.minLength(6)],
      phoneNum: this.fb.array([],[Validators.required , Validators.pattern(/^(01)(0|1|2|5)[0-9]{8}$/)]),
      address: this.fb.array([]),
    });
  }

  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      code: '',
      street: '',
    });
  }
  get phoneNum(): FormArray {
    return this.userForm.get('phoneNum') as FormArray;
  }

  newPhone(): FormGroup {
    return this.fb.group({
      phone:''
    });
  }
  addPhone(){
    this.phoneNum.push(this.newPhone());
  }

  removePhone(numOfIndex: number){
    this.phoneNum.removeAt(numOfIndex);
  }

  addUser(){
    console.log(this.userForm.value);
    this.userService.signUp(this.userForm.value).subscribe({
      next:(data)=>{
        console.log(data);
        alert('user added!');
      },
      error:(error)=>{
        console.log(error);
      }
    });
    this.route.navigate(['/Home'])
  }

}



