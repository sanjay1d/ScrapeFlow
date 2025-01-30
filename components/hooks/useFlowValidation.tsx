import { useContext } from "react";
import { FlowValidationContext } from "../context/FlowValidateContext";

export default function useFlowValidation() {
  const context = useContext(FlowValidationContext);
  if (!context) {
    throw new Error("useFlowValidation must be within a FlowValidationContext");
  }

  return context;
}
