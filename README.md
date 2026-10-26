# Procurement AI Workbench

An accelerated React learning project built around a realistic AI
procurement workflow.

## Run the project

```powershell
npm install
npm run dev
```

Use `npm run typecheck` at any time to check the TypeScript project without
building it.

## Lesson 1: components, props, and lists

**Timebox:** 60–90 minutes

The starter already contains a typed `PurchaseRequest` model and three sample
requests. Your task is to display those requests as reusable React components.

### Build

1. Create `src/components/PurchaseRequestCard.tsx`.
2. Give it one prop named `request`, typed as `PurchaseRequest`.
3. Display the request ID, title, supplier, requester, status, and amount.
4. Format the amount with `Intl.NumberFormat` instead of concatenating strings.
5. In `App.tsx`, render one card for each item in `purchaseRequests`.
6. Give React a stable key derived from the request data.
7. Add the minimum CSS needed to make the cards readable at phone and desktop widths.

Do not use `useState`, `useEffect`, a component library, or a state-management
library. None of them solves a problem in this lesson.

### Definition of done

- All three requests are visible.
- The card is reusable and has a typed public API.
- Currency is formatted as euros for a German locale.
- The page remains usable at 320 px wide.
- `npm run typecheck` and `npm run build` pass.
- There are no console warnings about list keys.

### Angular-to-React orientation

| Angular | React in this lesson |
| --- | --- |
| Component class and template | Function returning JSX |
| `@Input() request` | `request` prop |
| `*ngFor` | JavaScript `.map()` |
| `trackBy` | React `key` |
| Currency pipe | `Intl.NumberFormat` |

The mapping is only a learning aid. React props are ordinary function inputs,
and JSX is JavaScript syntax rather than a separate template language.

### Be ready to explain

1. What causes `PurchaseRequestCard` to render?
2. Why must the list key be stable?
3. Why should the component receive a whole request rather than import the sample data?
4. What happens if the parent supplies a status that is not part of the union type?
5. Which parts of this implementation are React-specific, and which are ordinary JavaScript?

When the implementation is ready, ask for a code review. We will review it before
adding state, event handling, or data fetching.
