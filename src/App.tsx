import { useState } from "react";
import { PurchaseRequestCard } from "./components/PurchaseRequestCard";
import { purchaseRequests } from "./data/purchase-requests";

export default function App() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredRequests = purchaseRequests.filter((request) =>
    [
      request.id,
      request.title,
      request.supplier,
      request.requestedBy,
    ].some((value) =>
      value.toLowerCase().includes(normalizedQuery),
    ),
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
        <div className="search-form">
          <label htmlFor="search">
            Search purchase requests:
            <input
              id="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>


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

