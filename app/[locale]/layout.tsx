import { ReactNode } from "react";
import Providers from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

/**
 * Locale layout:
 * - Loads translations for the current locale
 * - Wraps the app with NextIntlClientProvider and client Providers (theme + track)
 *
 * IMPORTANT: Do NOT render <html>/<body> here (only in app/layout.tsx), otherwise hydration breaks.
 */
export default async function LocaleLayout({
  children
}: {
  children: ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>{children}</Providers>
    </NextIntlClientProvider>
  );
}
