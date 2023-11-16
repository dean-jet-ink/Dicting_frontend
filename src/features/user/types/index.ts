export type User = {
  email: string;
  name: string;
  image: string;
};

export type UserForm = Omit<User, "image">;

export type UserImageForm = {
  image: File;
};
