// Demo prices for a fictional kit (not real costs). Every part of the store
// and the tests read prices from here, so the summary and saved totals match.
export const KIT_CENTS = 1800;
export const REFILL_CENTS = 500;
export const SHIPPING_CENTS = 0;

// S1: what's inside the kit. Shown in the "What's inside" list.
export const KIT_CONTENTS = [
  { name: "Interior cleaning wipes", use: "Dash, doors, and cup holders" },
  { name: "Microfiber cloth", use: "Screens and glass, no streaks" },
  { name: "Detail brush", use: "Vents and seat seams" },
  { name: "Vent-clip scent", use: "In the scent you pick" },
];

export const money = (cents) => `$${(cents / 100).toFixed(2)}`;

// S2: the full price before checkout. The refill is its own line (group issue #2).
export function orderTotal({ refill = false } = {}) {
  const refillCents = refill ? REFILL_CENTS : 0;
  return {
    kit: KIT_CENTS,
    refill: refillCents,
    shipping: SHIPPING_CENTS,
    total: KIT_CENTS + refillCents + SHIPPING_CENTS,
  };
}
