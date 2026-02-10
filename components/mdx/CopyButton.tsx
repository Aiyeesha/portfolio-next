"use client";

import { useCallback, useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }, [text]);

  return (
    <button type="button" onClick={onCopy} className="mdx-code__copy soft-ring">
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
