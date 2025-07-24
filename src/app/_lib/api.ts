// Configuração da API para conectar com o backend Django
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Cliente HTTP base
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          errorData.error || `HTTP error! status: ${response.status}`,
          response.status,
          errorData,
        );
      }

      // Se a resposta for vazia, retorna null
      if (response.status === 204) {
        return null as T;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        error instanceof Error ? error.message : "Erro de rede",
        0,
      );
    }
  }

  // Métodos HTTP
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

// Instância global da API
export const api = new ApiClient(API_BASE_URL);

// Tipos para as entidades do backend
export interface User {
  id: number;
  email: string;
  is_company: boolean;
  is_person: boolean;
  date_joined: string;
}

export interface UserCompany {
  id: number;
  user: User;
  cnpj: string;
  company_name: string;
  trade_name?: string;
  state_registration?: string;
}

export interface UserPerson {
  id: number;
  user: User;
  cpf: string;
  full_name: string;
  birth_date?: string;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  created_at: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  requirements?: string;
  benefits?: string;
  location: string;
  job_type: "remote" | "hybrid" | "onsite";
  hours_per_week: number;
  duration_weeks?: number;
  is_flexible_hours: boolean;
  is_flexible_duration: boolean;
  company: UserCompany;
  category?: Category;
  status: "active" | "inactive" | "closed";
  views_count: number;
  applications_count: number;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: number;
  job: Job;
  applicant: UserPerson;
  cover_letter: string;
  resume?: string;
  status: "pending" | "reviewed" | "accepted" | "rejected" | "withdrawn";
  applied_at: string;
  reviewed_at?: string;
  notes?: string;
}

export interface JobView {
  id: number;
  job: Job;
  viewer?: User;
  ip_address?: string;
  viewed_at: string;
}

// Filtros para busca
export interface JobFilters {
  status?: string;
  category?: number;
  location?: string;
  job_type?: string;
  search?: string;
  include_inactive?: boolean;
}

export interface ApplicationFilters {
  status?: string;
  job?: number;
}
