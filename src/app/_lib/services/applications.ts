import { api, Application, ApplicationFilters } from "../api";

export interface CreateApplicationData {
  job: number;
  cover_letter: string;
  resume?: File;
}

export interface UpdateApplicationData {
  cover_letter?: string;
  resume?: File;
}

export interface UpdateApplicationStatusData {
  status: "pending" | "reviewed" | "accepted" | "rejected" | "withdrawn";
  notes?: string;
}

export class ApplicationsService {
  // Listar candidaturas
  static async getApplications(
    filters?: ApplicationFilters,
  ): Promise<Application[]> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    const queryString = params.toString();
    const endpoint = queryString
      ? `/applications/?${queryString}`
      : "/applications/";

    return api.get<Application[]>(endpoint);
  }

  // Obter candidatura específica
  static async getApplication(id: number): Promise<Application> {
    return api.get<Application>(`/applications/${id}/`);
  }

  // Criar candidatura
  static async createApplication(
    data: CreateApplicationData,
  ): Promise<Application> {
    const formData = new FormData();
    formData.append("job", data.job.toString());
    formData.append("cover_letter", data.cover_letter);

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    return api.post<Application>("/applications/", formData, {
      headers: {
        // Não definir Content-Type aqui, deixar o browser definir com boundary
      },
    });
  }

  // Atualizar candidatura
  static async updateApplication(
    id: number,
    data: UpdateApplicationData,
  ): Promise<Application> {
    const formData = new FormData();

    if (data.cover_letter) {
      formData.append("cover_letter", data.cover_letter);
    }

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    return api.put<Application>(`/applications/${id}/`, formData, {
      headers: {
        // Não definir Content-Type aqui, deixar o browser definir com boundary
      },
    });
  }

  // Deletar candidatura
  static async deleteApplication(id: number): Promise<void> {
    return api.delete(`/applications/${id}/`);
  }

  // Atualizar status da candidatura (para empresas)
  static async updateApplicationStatus(
    id: number,
    data: UpdateApplicationStatusData,
  ): Promise<Application> {
    return api.post<Application>(`/applications/${id}/update_status/`, data);
  }

  // Minhas candidaturas (para desenvolvedores)
  static async getMyApplications(): Promise<Application[]> {
    return api.get<Application[]>("/applications/my_applications/");
  }

  // Candidaturas da empresa (para empresas)
  static async getCompanyApplications(): Promise<Application[]> {
    return api.get<Application[]>("/applications/company_applications/");
  }
}
