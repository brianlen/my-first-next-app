import ThemeProvider from './ThemeProvider';

export const metadata = {
  title: 'Henry Cho - Resume',
  description: 'Space Systems Engineer & Research Analyst',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
