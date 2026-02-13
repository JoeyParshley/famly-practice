import MSWBootstrap from "@/src/app/MSWBootstrap";
import ThemeLayout from "@/src/app/ThemeLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MSWBootstrap>
          <ThemeLayout>{children}</ThemeLayout>
        </MSWBootstrap>
      </body>
    </html>
  );
}