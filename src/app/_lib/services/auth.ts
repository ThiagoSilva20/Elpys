import { api, User, UserCompany, UserPerson } from "../api";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterCompanyData {
  email: string;
  password: string;
  cnpj: string;
  company_name: string;
  trade_name?: string;
  state_registration?: string;
  phone?: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  description?: string;
}

export interface RegisterPersonData {
  email: string;
  password: string;
  cpf: string;
  full_name: string;
  birth_date?: string;
  phone?: string;
  city?: string;
  state?: string;
  interests?: string;
  availability?: string;
}

export interface AuthResponse {
  user: User;
  message: string;
}

export interface CompanyResponse {
  user: User;
  user_company: UserCompany;
  message: string;
}

export interface PersonResponse {
  user: User;
  user_person: UserPerson;
  message: string;
}

export class AuthService {
  // Login
  static async login(data: LoginData): Promise<AuthResponse> {
    return api.post<AuthResponse>("/auth/login/", data);
  }

  // Registro de empresa
  static async registerCompany(
    data: RegisterCompanyData,
  ): Promise<CompanyResponse> {
    return api.post<CompanyResponse>("/companies/", data);
  }

  // Registro de pessoa
  static async registerPerson(
    data: RegisterPersonData,
  ): Promise<PersonResponse> {
    return api.post<PersonResponse>("/persons/", data);
  }

  // Logout
  static async logout(): Promise<void> {
    return api.post("/auth/logout/");
  }

  // Verificar se está autenticado
  static async checkAuth(): Promise<User> {
    return api.get<User>("/auth/user/");
  }
}
