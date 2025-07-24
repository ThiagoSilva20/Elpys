import { api, Job, JobFilters, Category } from "../api";

export interface CreateJobData {
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
  category?: number;
}

export interface UpdateJobData extends Partial<CreateJobData> {
  status?: "active" | "inactive" | "closed";
}

export class JobsService {
  // Listar vagas
  static async getJobs(filters?: JobFilters): Promise<Job[]> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    const queryString = params.toString();
    const endpoint = queryString ? `/jobs/?${queryString}` : "/jobs/";

    return api.get<Job[]>(endpoint);
  }

  // Obter vaga específica
  static async getJob(id: number): Promise<Job> {
    return api.get<Job>(`/jobs/${id}/`);
  }

  // Criar vaga
  static async createJob(data: CreateJobData): Promise<Job> {
    return api.post<Job>("/jobs/", data);
  }

  // Atualizar vaga
  static async updateJob(id: number, data: UpdateJobData): Promise<Job> {
    return api.put<Job>(`/jobs/${id}/`, data);
  }

  // Deletar vaga
  static async deleteJob(id: number): Promise<void> {
    return api.delete(`/jobs/${id}/`);
  }

  // Incrementar visualização
  static async incrementView(id: number): Promise<void> {
    return api.post(`/jobs/${id}/increment_view/`);
  }

  // Minhas vagas (para empresas)
  static async getMyJobs(): Promise<Job[]> {
    return api.get<Job[]>("/jobs/my_jobs/");
  }

  // Obter categorias
  static async getCategories(): Promise<Category[]> {
    return api.get<Category[]>("/categories/");
  }

  // Obter categorias com contagem de vagas
  static async getCategoriesWithJobCount(): Promise<Category[]> {
    return api.get<Category[]>("/categories/with_job_count/");
  }
}
