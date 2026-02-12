/**
 * This is the MSW brower setup file:
 * 
 *  - Creates and exports a service worker instance that can intercept API calls in the browser during development
 */
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);