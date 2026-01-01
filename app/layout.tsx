import "./globals.css";

export const metadata = {
  title: "Aletheia — A calm place to think out loud",
  description:
    "A voice-first AI companion for reflection and emotional clarity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-background-light text-text-main font-display antialiased">
        {children}
      </body>
    </html>
  );
}
