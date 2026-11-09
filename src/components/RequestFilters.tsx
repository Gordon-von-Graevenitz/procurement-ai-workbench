import type { PurchaseRequestStatus } from "../domain/purchase-request";
import styles from "./RequestFilters.module.css";

export type StatusFilter = PurchaseRequestStatus | "All";

interface RequestFiltersProps {
    query: string;
    status: StatusFilter;
    onQueryChange: (query: string) => void;
    onStatusChange: (status: StatusFilter) => void;
}

export function RequestFilters({ query, status, onQueryChange, onStatusChange }: RequestFiltersProps) {
    return (
        <div className={styles.filters}>
            <label className={styles.field} htmlFor="search">
                Search purchase requests:
                <input
                    className={styles.control}
                    id="search"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                />
            </label>
            <label className={styles.field} htmlFor="status">
                Filter by status:
                <select
                    className={styles.control}
                    id="status"
                    value={status}
                    onChange={(event) => onStatusChange(event.target.value as StatusFilter)}
                >
                    <option value="All">All</option>
                    <option value="Needs review">Needs review</option>
                    <option value="Awaiting approval">Awaiting approval</option>
                    <option value="On hold">On hold</option>
                </select>
            </label>
        </div>

    );
}
