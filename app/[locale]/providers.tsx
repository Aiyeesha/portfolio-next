"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

export type Track = "itops" | "salesforce";
type TrackContextValue = { track: Track; setTrack: (t: Track) => void };

const TrackContext = createContext<TrackContextValue | null>(null);

export function useTrack() {
  const ctx = useContext(TrackContext);
  if (!ctx) throw new Error("useTrack must be used within Providers");
  return ctx;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [track, setTrackState] = useState<Track>("salesforce");

  useEffect(() => {
    const saved = window.localStorage.getItem("track");
    if (saved === "itops" || saved === "salesforce") setTrackState(saved);
  }, []);

  const setTrack = (t: Track) => {
    setTrackState(t);
    window.localStorage.setItem("track", t);
  };

  const value = useMemo(() => ({ track, setTrack }), [track]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
    </ThemeProvider>
  );
}
