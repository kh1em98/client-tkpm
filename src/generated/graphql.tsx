import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTaskInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CredentialsError = Error & {
  __typename?: 'CredentialsError';
  message: Scalars['String'];
  field: Scalars['String'];
};

export type EmailExistedError = Error & {
  __typename?: 'EmailExistedError';
  message: Scalars['String'];
};

export type Error = {
  message: Scalars['String'];
};

export type InputValidationError = Error & {
  __typename?: 'InputValidationError';
  message: Scalars['String'];
  fields: Array<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = User | CredentialsError | InputValidationError;

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginPayload;
  register: RegisterPayload;
  createTask: Task;
  deleteTaskById: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  logoutAllDevice: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  verify: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteTaskByIdArgs = {
  id: Scalars['Float'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLogoutAllDeviceArgs = {
  email: Scalars['String'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['Float'];
};


export type MutationVerifyArgs = {
  token: Scalars['String'];
};

export type PaginatedTasks = {
  __typename?: 'PaginatedTasks';
  tasks: Array<Task>;
  hasMore: Scalars['Boolean'];
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getTaskById: Task;
  getAllTasks: PaginatedTasks;
  getUserById?: Maybe<User>;
  me?: Maybe<User>;
  getAllUser?: Maybe<Array<User>>;
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetAllTasksArgs = {
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float'];
};

export type RegisterInput = {
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterPayload = User | EmailExistedError | InputValidationError;

export enum Role {
  Admin = 'Admin',
  User = 'User'
}

export type Task = {
  __typename?: 'Task';
  id: Scalars['Float'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  userId: Scalars['Float'];
  user: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  verified: Scalars['Boolean'];
  role: Role;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

type ErrorBrief_CredentialsError_Fragment = (
  { __typename?: 'CredentialsError' }
  & Pick<CredentialsError, 'message'>
);

type ErrorBrief_EmailExistedError_Fragment = (
  { __typename?: 'EmailExistedError' }
  & Pick<EmailExistedError, 'message'>
);

type ErrorBrief_InputValidationError_Fragment = (
  { __typename?: 'InputValidationError' }
  & Pick<InputValidationError, 'message'>
);

export type ErrorBriefFragment = ErrorBrief_CredentialsError_Fragment | ErrorBrief_EmailExistedError_Fragment | ErrorBrief_InputValidationError_Fragment;

export type UserBriefFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'image' | 'lastName'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description' | 'userId' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'lastName' | 'image'>
    ) }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename: 'User' }
    & UserBriefFragment
  ) | (
    { __typename: 'CredentialsError' }
    & Pick<CredentialsError, 'field'>
    & ErrorBrief_CredentialsError_Fragment
  ) | (
    { __typename: 'InputValidationError' }
    & ErrorBrief_InputValidationError_Fragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename: 'User' }
    & UserBriefFragment
  ) | (
    { __typename: 'EmailExistedError' }
    & ErrorBrief_EmailExistedError_Fragment
  ) | (
    { __typename: 'InputValidationError' }
    & ErrorBrief_InputValidationError_Fragment
  ) }
);

export type GetAllTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTasksQuery = (
  { __typename?: 'Query' }
  & { getAllTasks: (
    { __typename?: 'PaginatedTasks' }
    & { tasks: Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'description' | 'createdAt'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'lastName' | 'image' | 'role'>
      ) }
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserBriefFragment
  )> }
);

export const ErrorBriefFragmentDoc = gql`
    fragment ErrorBrief on Error {
  message
}
    `;
export const UserBriefFragmentDoc = gql`
    fragment UserBrief on User {
  id
  email
  image
  lastName
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(token: $token, password: $password)
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    description
    userId
    user {
      lastName
      image
    }
    createdAt
  }
}
    `;

export function useCreateTaskMutation() {
  return Urql.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    __typename
    ... on User {
      ...UserBrief
    }
    ... on Error {
      ...ErrorBrief
    }
    ... on CredentialsError {
      field
    }
  }
}
    ${UserBriefFragmentDoc}
${ErrorBriefFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    __typename
    ... on User {
      ...UserBrief
    }
    ... on Error {
      ...ErrorBrief
    }
  }
}
    ${UserBriefFragmentDoc}
${ErrorBriefFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetAllTasksDocument = gql`
    query GetAllTasks {
  getAllTasks {
    tasks {
      id
      title
      description
      createdAt
      user {
        id
        lastName
        image
        role
      }
    }
  }
}
    `;

export function useGetAllTasksQuery(options: Omit<Urql.UseQueryArgs<GetAllTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllTasksQuery>({ query: GetAllTasksDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...UserBrief
  }
}
    ${UserBriefFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};