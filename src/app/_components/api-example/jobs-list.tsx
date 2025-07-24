"use client";

import { useEffect, useState } from "react";
import { JobsService } from "../../_lib/services/jobs";
import { Job } from "../../_lib/api";

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await JobsService.getJobs({ status: "active" });
        setJobs(jobsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar vagas");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
        <span className="ml-2">Carregando vagas...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-4 rounded-lg border border-red-200 bg-red-50 p-4">
        <h3 className="font-medium text-red-800">Erro ao carregar vagas</h3>
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Nenhuma vaga encontrada.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold text-gray-900">Vagas Disponíveis</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex items-start justify-between">
              <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
                {job.title}
              </h3>
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  job.job_type === "remote"
                    ? "bg-green-100 text-green-800"
                    : job.job_type === "hybrid"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                }`}
              >
                {job.job_type === "remote"
                  ? "Remoto"
                  : job.job_type === "hybrid"
                    ? "Híbrido"
                    : "Presencial"}
              </span>
            </div>

            <p className="mb-3 line-clamp-3 text-sm text-gray-600">
              {job.description}
            </p>

            <div className="mb-3 flex items-center text-sm text-gray-500">
              <span className="mr-4">📍 {job.location}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>👁️ {job.views_count} visualizações</span>
              <span>📝 {job.applications_count} candidaturas</span>
            </div>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {job.company.company_name}
                </span>
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
