export interface Iuser {
  id:number;
  fullName:string;
  email:string;
  address?:[{city:string , code:string , street:string}];
  phoneNum?:[{phoneNum:number}];
  password:string;
//   conf_password:string;
}
