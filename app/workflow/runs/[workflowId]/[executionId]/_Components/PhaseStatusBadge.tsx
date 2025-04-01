import { ExecutionphaseStatus } from "@/types/workflow";
import { ExecutionPhase } from "@prisma/client";
import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleXIcon,
  Loader2Icon,
} from "lucide-react";
import React from "react";

function PhaseStatusBadge({ status }: { status: ExecutionphaseStatus }) {
  switch (status) {
    case ExecutionphaseStatus.PENDING:
      return <CircleDashedIcon size={20} className="stroke-muted-foreground" />;
    case ExecutionphaseStatus.RUNNING:
      return (
        <Loader2Icon size={20} className="animate-spin stroke-yellow-500" />
      );
    case ExecutionphaseStatus.FAILED:
      return <CircleXIcon size={20} className="stroke-destructive" />;
    case ExecutionphaseStatus.COMPLETED:
      return <CircleCheckIcon size={20} className="stroke-green-500" />;
    default:
      return <div className="rounded-full">{status}</div>;
  }
}

export default PhaseStatusBadge;
