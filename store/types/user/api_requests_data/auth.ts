// sign in api
export interface ISignInPayload {
  email: string;
  password: string;
}

// sign up api
export interface ISignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  confirmPassword: string;
  gender: string;
  packageId: string;
  notificationToken?: string;
  deviceOS?: any;
  deviceModal?: any;
  deviceId?: any;
  deviceType?: any;
}

// verify otp api
export interface IVerifyOtpPayload {
  otp: number;
  notificationToken?: string;
  deviceOS?: string;
  deviceModal?: any;
  deviceId?: any;
  deviceType?: any;
}
