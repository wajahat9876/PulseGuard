 
import { IAPIRespone } from '../..';

// sign in api response
interface SignIn {
  auth_token: string;
}

export interface UserPayee {
  _id?: string;
  benefId?: string;
  accountName: string;
  iban?: string;
  receiverType: number;
  receiverBankName: string;
  postalCode: string;
  city: string;
  countryCode: string;
  receiverAddress: string;
  receiverBankBic?: string;
  accountNumber?: string;
  sortCode?: string;
}
export interface Quotes {
  buyAmount: string;
  buyCurrency: string;
  creditAmount: string;
  cutOffDateTime: string;
  debitAmount: string;
  exchangeDate: string;
  expiryDateTime: string;
  feeAmount: string;
  feeCurrency: string;
  id: string;
  offline: boolean;
  rate: string;
  sellAmount: string;
  sellCurrency: string;
  settlementDate: string;
}
export interface ReviewFormData {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
}
export interface LastSelectBenefDetails {
  confirmation_of_payee_id?: string;
  isFirstTransfer?: boolean;
  country?: string;
  currency?: string;
  _id?: string;
  iban?: string;
  accountNumber?: string;
  sortCode?: string;
}
export interface OutgoingTransfer {
  amount: string;
  message: string;
  transferReasonId: string;
  currency?: string;
}
// verify sign in api response
export interface VerifySignIn {
  cardStatus?: string | undefined;
  virtualCardStatus?: string | undefined;
  devices?: any[];
  alert?: boolean;
  activeCurrencyIban?: string;
  activeCurrencyBalance?: any;
  clientId?: string;
  firstName: string;
  createdAt?: string;
  lastName: string;
  emailVerified: boolean;
  phoneNumber: string;
  isPassCodeSet?: boolean;
  activeCurrency?: string;
  email: string;
  isVerified: boolean;
  isVerifiedAt?: string;
  riskScore?: {
    total: number;
  };
  country: {
    name: string;
    countryCode: string;
  };
  dateOfBirth: string;
  phoneNumberVerified: boolean;
  kycStatus: number;
  role: string;
  isBlocked: boolean;
  packageId: string;
  flag: number;
  isDeleted: boolean;
  gender: string;
  accountDetails: any[];
  gbg?: Gbg;
  activeCurrencyFeePlan?: any[];
  kyc?: {
    failedReason?: string;
    kycStatus: string;
  };
  auth_token: string;
  activeAccountDetails?: {
    accountId: string;
    accountNumber: string;
    active: boolean;
    currencyCode: string;
    iban: string;
    routingCodes: any[];
    status: string;
  };
  feePlan?: {
    payments: {
      multiCurrency: any[];
    };
  };
}

interface Gbg {
  steps: {
    isFinished: boolean;
    idfront: IUploadDetails;
    idback: Idback;
    poa: IUploadDetails;
    selfie: IUploadDetails;
  };
}

interface Idback {
  uploaded: boolean;
  isFailed: boolean;
  BackNotRequired: boolean;
  failedMessage: string;
  retriesScan: string;
}

interface IUploadDetails {
  uploaded: boolean;
  isFailed: boolean;
  failedMessage: string;
  retriesScan: string;
}

// sign up api response
interface Signup {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
  isVerified: boolean;
  kycStatus: number;
  role: string;
  isBlocked: boolean;
  packageId: string;
  address: {
    buildingName: string;
    streetAddress: string;
    town: string;
    postcode: string;
  };
  sourceOfFunds: string;
  country: {
    name: string;
    countryCode: string;
  };
  flag: number;
  isDeleted: boolean;
  gender: string;
  tokenVersion: number;
  accountDetails: any[];
  auth_token: string;
}

interface VerifySignupEmail {
  email: string;
  emailVerified: boolean;
}

interface VerifySignupPhoneNumber {
  phoneNumber: string;
  phoneNumberVerified: boolean;
}

export type ISignInResponse = IAPIRespone<SignIn>;
export type IVerifySignInResponse = IAPIRespone<VerifySignIn>;
export type ISignUpResponse = IAPIRespone<Signup>;
export type ICurrentResponse = IAPIRespone<VerifySignIn>;
export type IVerifySignUpEmailResponse = IAPIRespone<VerifySignupEmail>;
export type IVerifySignUpPhoneResponse = IAPIRespone<VerifySignupPhoneNumber>;
