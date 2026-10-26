import type { PurchaseRequest } from '../domain/purchase-request';

interface PurchaseRequestCardProps {
    request: PurchaseRequest;
}

export function PurchaseRequestCard({ request }: PurchaseRequestCardProps) {
    const formattedAmount = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: request.currency,
    }).format(request.amount)
    return (
        <article className="purchase-request-card">
            <h2>{request.title}</h2>
            <p>ID: {request.id}</p>
            <p>Supplier: {request.supplier}</p>
            <p>Requested By: {request.requestedBy}</p>
            <p>Status: {request.status}</p>
            <p>Amount: {formattedAmount}</p>

        </article>
    );
}