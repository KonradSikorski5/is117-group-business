# Group plan

Plan date: Nov 16, 2026. This is a plan. Nothing here is built yet. Comes from our [research](/research).

**Goal:** a commuting student picks a scent, sees exactly what's in the kit and the full price, and places a demo order.

## Brand brief

- **Name:** Exit Fresh
- **Promise:** "A cleaner car between class and work, in one small kit."
- **Character and voice:** Everyman. Chill, straight-up, Jersey.
- **Hero copy (same in A and B):** "Car looking rough?" / "One small kit: wipes, a cloth, a brush, and a scent you pick. Full price shown before you check out."
- **Main action:** pick a scent → see what's inside and the total → demo checkout → order number.

## Two honest persuasion choices

| Principle | What's on the page | Why it could help | Limit |
| --- | --- | --- | --- |
| Reciprocity | A free "5-minute car reset" checklist above the kit | Gives something useful before asking anyone to buy | We haven't measured whether it changes anything |
| Unity | Jersey commuter voice ("between class and work") | Students may see that it's made for people like them | It's a guess about our audience, not tested |

No fake reviews, countdowns, or "only 3 left" messages.

## Two approaches

Both use the **same** kit, price, hero copy, scents, and checkout. Only the order and look change.

| | A. Kit first | B. Checklist first |
| --- | --- | --- |
| First thing shown | Kit photo, what's inside, price, and scent picker | The free "5-minute car reset" checklist, then the same kit and picker |
| Look | Clean grid, lots of white space | Bold colors and mixed type |
| Why try it | A student wants to buy fast | A first-time visitor may want a reason to trust it first |
| What we'll compare | Same task for a classmate in A and B: find what's inside, the full total, and finish a demo order | Same task |

## User stories and checks (same in A and B)

| ID | Story | Essential feature | Check (someone else can tell if it passes) |
| --- | --- | --- | --- |
| S1 | As a commuting student, I want to see what's in the kit so I know what I'm paying for. | F1: a "What's inside" list (wipes, microfiber cloth, detail brush, vent-clip scent) | A classmate lists all 4 items using only the product page |
| S2 | As a student on a budget, I want the full price with shipping before checkout. | F2: a summary showing kit price, the scent refill if added, demo shipping, and the total | Add a refill: the total goes up by the refill price, and shipping is shown before the checkout button |
| S3 | As a buyer, I want to pick my scent so the kit fits me. | F3: a required scent picker (3 scents) plus an optional refill add-on | With no scent picked, checkout shows an error. After picking one, it appears in the summary |
| S4 | As a buyer, I want proof the demo order went through. | F4: a demo checkout (fake email) that saves the order and shows an order number | A bad email saves nothing and shows an error. A valid order shows an order number and appears in "Demo order history" |

**Deferred (not building):** real payments, accounts, store locator, and subscriptions.

## Data, states, and limits

- **Inputs:** scent (1 of 3), refill yes/no, and a fake email like `demo@example.test`. The email is checked but not saved.
- **Data:** kit price and refill price are **demo prices** that we'll set when we build. They aren't real costs. Orders are saved in browser storage on the public site. A local SQLite server is optional.
- **States:** scent missing → error · ready · saving · confirmation with order number · save failed → error, with no fake success message.
- **Limits:** Exit Fresh is fictional. There's no real product, stock, or shipping.

## Team work plan

> **Proposed by Konrad on Nov 16. Waiting for Safwaan to agree or change it** in [issue #2](https://github.com/KonradSikorski5/is117-group-business/issues/2).

| Member | Design and build | Cross-review (checks the other's work) | Planned effort |
| --- | --- | --- | --- |
| Konrad | Version A page, "What's inside" (S1), price summary and total (S2) | Safwaan's scent picker, checkout errors, and order history | About half |
| Safwaan | Version B page, scent picker and refill (S3), demo checkout and order history (S4) | Konrad's "What's inside" list, total math, and phone-size layout | About half |

## AI help

We used **Claude** (Anthropic) to organize this plan. The stories come from our research findings.
