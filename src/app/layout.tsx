import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "./components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 list-none">
        <Header />
        <main className="font-montserrat flex flex-col justify-between items-center p-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
