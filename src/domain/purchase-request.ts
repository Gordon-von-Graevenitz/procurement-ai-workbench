export type PurchaseRequestStatus =
  | "Needs review"
  | "Awaiting approval"
  | "On hold";

export interface PurchaseRequest {
  id: string;
  title: string;
  supplier: string;
  amount: number;
  currency: "EUR";
  status: PurchaseRequestStatus;
  requestedBy: string;
}

