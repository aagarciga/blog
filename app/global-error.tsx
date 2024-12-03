"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <h1>Sorry, something went wrong 😞</h1>
        <button
          onClick={() => reset()} // attempt to recover by trying to re-render the segment
        >
          Try again
        </button>
      </body>
    </html>
  );
}