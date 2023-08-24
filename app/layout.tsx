import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
 
 

import './globals.css'
import Navbar from './components/navabr/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/Toaster';
import LoginModal from './components/modals/LoginModal';
import AuthProvider from './components/AuthProvider';
import getCurrentUser from './actions/getCurrentUser';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AirBnb Clone',
  description: 'AirBNB',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser=await getCurrentUser()
  return (
       <html lang="en" suppressHydrationWarning>
         <body className={font.className}>
          <AuthProvider>

          <ToasterProvider/>
          <ClientOnly>
            <LoginModal />
            <RegisterModal />
             

         <Navbar currentUser={currentUser}/>
          </ClientOnly>
          {children}
          </AuthProvider>
        </body>
      </html>
   )
}
