import Navigation from "@/components/Navigation";

export const metadata = {
  title: "F8 Học lập trình để đi làm",
  description: "Chơi không khó",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {/* <Navigation /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
