import "./globals.css";
import StoreProvider from "../store/provider";

export const metadata = {
  title: "RenewCred CMS",
  description: "Frontend Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}