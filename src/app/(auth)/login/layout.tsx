import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import Providers from '@/app/(site)/providers';

import '../../(site)/variables.css';
import "../../(site)/globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login | Digital-news-app",
  description: "Admin login page for Digital-news-app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} bg-light min-vh-100 d-flex justify-content-center align-items-center`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
