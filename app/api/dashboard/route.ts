import { NextResponse } from "next/server";
import type { Dashboard } from "@/src/api/famly";

const demo: Dashboard = {
  householdName: "Simpson Household",
  members: [
    { id: "m1", name: "Homer", role: "Parent" },
    { id: "m2", name: "Marge", role: "Parent" },
    { id: "m3", name: "Bart", role: "Kid" },
    { id: "m4", name: "Lisa", role: "Kid" },
    { id: "m5", name: "Maggie", role: "Kid" },
    { id: "m6", name: "Santas Little Helper", role: "Pet" },
  ],
  budgets: [
    { id: "b1", category: "Groceries", planned: 600, actual: 520 },
    { id: "b2", category: "Dining", planned: 200, actual: 265 },
  ],
  debts: [
    { id: "d1", name: "Capitol One", balance: 5000, apr: 0.22 },
    { id: "d2", name: "Santander", balance: 10000, apr: 0.18 },
    { id: "d3", name: "Jet Blue", balance: 7500, apr: 0.29 },
    { id: "d4", name: "Citi", balance: 12000, apr: 0.14 },
  ],
};

export async function GET() {
  return NextResponse.json(demo);
}
