import type { PurchaseRequest } from "../domain/purchase-request";

export const purchaseRequests: PurchaseRequest[] = [
  {
    id: "PR-1042",
    title: "Industrial bearing replacements",
    supplier: "Supplier Alpha",
    amount: 78_000,
    currency: "EUR",
    status: "Needs review",
    requestedBy: "Marta Klein",
  },
  {
    id: "PR-1041",
    title: "Turbine inspection equipment",
    supplier: "NordWerk Systems",
    amount: 42_500,
    currency: "EUR",
    status: "Awaiting approval",
    requestedBy: "Daniel Okafor",
  },
  {
    id: "PR-1038",
    title: "Protective maintenance clothing",
    supplier: "SafeCore Europe",
    amount: 18_640,
    currency: "EUR",
    status: "On hold",
    requestedBy: "Lucia Bianchi",
  },
];

