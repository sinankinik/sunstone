import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sunstone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}
