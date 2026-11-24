import { test } from "node:test";
import assert from "node:assert/strict";
import {
  KIT_CENTS,
  REFILL_CENTS,
  SHIPPING_CENTS,
  KIT_CONTENTS,
  money,
  orderTotal,
} from "../docs/public/store/pricing.js";

test("S1: the kit lists all 4 items", () => {
  assert.deepEqual(
    KIT_CONTENTS.map((item) => item.name),
    [
      "Interior cleaning wipes",
      "Microfiber cloth",
      "Detail brush",
      "Vent-clip scent",
    ],
  );
});

test("S2: without a refill, the total is kit + shipping", () => {
  const total = orderTotal();
  assert.equal(total.refill, 0);
  assert.equal(total.total, KIT_CENTS + SHIPPING_CENTS);
  assert.equal(money(total.total), "$18.00");
});

test("S2: adding a refill raises the total by exactly the refill price", () => {
  const without = orderTotal({ refill: false }).total;
  const withRefill = orderTotal({ refill: true });
  assert.equal(withRefill.refill, REFILL_CENTS);
  assert.equal(withRefill.total - without, REFILL_CENTS);
  assert.equal(money(withRefill.total), "$23.00");
});

test("money formats cents as dollars", () => {
  assert.equal(money(0), "$0.00");
  assert.equal(money(500), "$5.00");
});
