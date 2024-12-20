import type { Metadata } from "next"
import "styles/global.scss"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    template: "%s | Reboo",
    default: "Reboo Book Tracker",
  },
  description:
    "Um aplicativo web para controle pessoal e estatísticas de leitura de livros de forma intuitiva",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html data-color-scheme="dark" lang="pt-BR">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
