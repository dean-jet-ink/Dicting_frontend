export type Credential = {
  email: string;
  password: string;
};

export type SignupForm = {
  name: string;
} & Credential;

export type SSOLoginProps = {
  idpName: "google" | "line";
};
