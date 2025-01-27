import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

const useExecutionPlan = () => {
  const { toObject } = useReactFlow();
  const generateExecutionplan = useCallback(() => {
    const { nodes, edges } = toObject();
    const result = FlowToExecutionPlan(nodes, edges);
  }, [toObject]);
  return generateExecutionplan;
};
