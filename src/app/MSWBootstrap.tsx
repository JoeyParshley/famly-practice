"use client";

import { useEffect, useState } from "react";

async function enableMocking() {
  if (process.env.NEXT_PUBLIC_API_MODE !== "mock") return;
  const { worker } = await import("@/src/mocks/browser");
  await worker.start({ onUnhandledRequest: "bypass" });
}

export default function MSWBootstrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    enableMocking().then(() => setReady(true));
  }, []);

  if (process.env.NEXT_PUBLIC_API_MODE === "mock" && !ready) {
    return null;
  }
  return <>{children}</>;
}
