/* eslint-disable prettier/prettier */

import { Suspense } from "react";

import ProjectsTableSkeleton from "../../_components/ui/skeleton/projectTableSkeleton";
import ProjectsTable from "../../_components/module/dashboard/projectManagement/projectTable";

import { getAllProjects } from "@/service/projectService/projectService";

export default async function ProjectsManagement() {
  const data = await getAllProjects();
  const projects = data?.data;

  return (
    <Suspense fallback={<ProjectsTableSkeleton />}>
      <ProjectsTable projects={projects} />
    </Suspense>
  );
}
