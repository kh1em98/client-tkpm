export interface LoginCredentials {
  email: string;
  password: string;
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface Account {
  id: string;
  email: string;
  username: string;
  age: number;
  phone: string;
  role: Role;
}

export type LoginUser = Account;

export const isAdmin = (user: LoginUser): boolean => {
  return user.role === Role.ADMIN;
};

export const constraint = {
  email: {
    MAX_LENGTH: 256,
  },
  name: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  firstName: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  lastName: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  password: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  username: {
    MAX_LENGTH: 50,
  },
  phone: {
    MIN_LENGTH: 9,
    MAX_LENGTH: 11,
  },
  age: {
    MIN: 14,
    MAX: 150,
  },
};
