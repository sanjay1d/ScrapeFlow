"use client";

import { GetWorkflowExecutions } from "@/actions/workflows/getWorkflowExecutions";
import { useQuery } from "@tanstack/react-query";

type InitialDataType = Awaited<ReturnType<typeof GetWorkflowExecutions>>;

function ExecutionsTable({
  workflowId,
  initialData,
}: {
  workflowId: string;
  initialData: InitialDataType;
}) {
  const query = useQuery({
    queryKey: ["executions", workflowId],
    initialData,
    queryFn: () => GetWorkflowExecutions(workflowId),
    refetchInterval: 5000,
  });
  console.log("this is data" + query.data);
  return <pre>{JSON.stringify(query.data, null, 4)}</pre>;
}

export default ExecutionsTable;
