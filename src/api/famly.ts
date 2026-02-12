/**
 * The main API module for the Famly App. It contains:
 *  - Typesscript definition for the Dashboard data structure including:
 *      - `householdName` string
 *      - `members` array with roles (Parent, Kid, Pet)
 *      - `budgets` array with planned vs actual spending
 *  - A `getDashboard` function that fetches dashboard data from `/api/dashboard`
 */
import { fetchJson } from "./http";

type Role = "Parent" | "Kid" | "Pet";

export type Member = {
    id: string,
    name: string,
    role: Role,
}

export type Budget = {
    id: string,
    category: string,
    planned: number,
    actual: number,
}

export type Debt = {
    id: string,
    name: string,
    balance: number,
    apr: number,
}

export type Dashboard = {
    householdName: string;
    members: Member[];
    budgets: Budget[];
    debts: Debt[];
};

export function getDashboard() {
    return fetchJson<Dashboard>("/api/dashboard");
}