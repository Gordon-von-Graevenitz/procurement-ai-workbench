import type { PurchaseRequest } from "../domain/purchase-request";
import styles from "./PurchaseRequestCard.module.css";

interface PurchaseRequestCardProps {
    request: PurchaseRequest;
}

export function PurchaseRequestCard({ request }: PurchaseRequestCardProps) {
    const formattedAmount = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: request.currency,
    }).format(request.amount);

    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{request.title}</h2>
            <p className={styles.detail}>ID: {request.id}</p>
            <p className={styles.detail}>Supplier: {request.supplier}</p>
            <p className={styles.detail}>Requested By: {request.requestedBy}</p>
            <p className={styles.detail}>Status: {request.status}</p>
            <p className={styles.detail}>Amount: {formattedAmount}</p>

        </article>
    );
}
