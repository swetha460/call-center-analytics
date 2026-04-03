import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call Center Analytics - Hackathon',
  description: 'Hindi/Tamil SOP Validation API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
