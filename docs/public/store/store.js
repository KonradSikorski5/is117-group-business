// Shared store state for Version A and Version B.
// Konrad: "What's inside" (S1) and the price summary (S2).
// Safwaan: scent picker, refill toggle, and checkout (S3, S4) plug in through
// window.exitFresh.setScent(name) and window.exitFresh.setRefill(true/false).
import { KIT_CONTENTS, money, orderTotal } from "./pricing.js";

const state = { scent: null, refill: false };

function renderContents() {
  const list = document.querySelector("#kit-contents");
  if (!list) return;
  list.replaceChildren(
    ...KIT_CONTENTS.map((item) => {
      const li = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = item.name;
      li.append(name, document.createTextNode(` · ${item.use}`));
      return li;
    }),
  );
}

function renderSummary() {
  const totals = orderTotal({ refill: state.refill });
  const set = (id, text) => {
    const el = document.querySelector(id);
    if (el) el.textContent = text;
  };
  set("#summary-scent", state.scent ?? "Not chosen yet");
  set("#summary-kit", money(totals.kit));
  set("#summary-refill", state.refill ? `+${money(totals.refill)}` : "Not added");
  set("#summary-shipping", money(totals.shipping));
  set("#summary-total", money(totals.total));
}

function update(changes) {
  Object.assign(state, changes);
  renderSummary();
  document.dispatchEvent(
    new CustomEvent("exitfresh:change", { detail: { ...state } }),
  );
}

window.exitFresh = {
  setScent: (scent) => update({ scent }),
  setRefill: (refill) => update({ refill: Boolean(refill) }),
  getState: () => ({ ...state, totals: orderTotal({ refill: state.refill }) }),
};

renderContents();
renderSummary();
