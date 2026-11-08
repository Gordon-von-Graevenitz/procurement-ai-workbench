import { useState } from "react";
import { PurchaseRequestCard } from "./components/PurchaseRequestCard";
import { purchaseRequests } from "./data/purchase-requests";
import { RequestFilters, type StatusFilter } from "./components/RequestFilters";

export default function App() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");

  const normalizedQuery = query.trim().toLowerCase();


  const filteredRequests = purchaseRequests.filter((request) => {
    const matchesQuery =
      [
        request.id,
        request.title,
        request.supplier,
        request.requestedBy,
      ].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      );

    const matchesStatus =
      status === "All" || request.status === status;

    return matchesQuery && matchesStatus;
  }
  );

  return (
    <main className="app-shell">
      <header className="hero">
        <h1>Procurement AI Workbench</h1>
        <p className="hero__summary">
          {filteredRequests.length === 1 ? (
            `There is ${filteredRequests.length} purchase request matching your search.`
          ) : (
            `There are ${filteredRequests.length} purchase requests waiting in the demonstration dataset.`
          )}
        </p>
      </header>

      <section>
        <RequestFilters
          query={query}
          status={status}
          onQueryChange={setQuery}
          onStatusChange={setStatus} />


        {filteredRequests.length === 0 ? (
          <p className="no-results">
            No purchase requests match your search.
          </p>
        ) : (
          <div className="request-list">
            {filteredRequests.map((request) => (
              <PurchaseRequestCard
                key={request.id}
                request={request}
              />
            ))}
          </div>
        )
        }
      </section>

    </main>
  );
}

