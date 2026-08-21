import './globals.css'

export const metadata = {
  title: 'Arefin Emon — Backend Developer',
  description:
    'Arefin Emon is a backend developer specializing in Node.js, Express.js and MongoDB — building scalable REST APIs, authentication systems and production-ready backend architecture.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Arefin Emon — Backend Developer',
    description:
      'Backend developer specializing in Node.js, Express.js and MongoDB — building scalable REST APIs and production-ready systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arefin Emon — Backend Developer',
    description:
      'Backend developer specializing in Node.js, Express.js and MongoDB — building scalable REST APIs and production-ready systems.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#0A0B0D',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                var theme = stored || 'dark';
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
