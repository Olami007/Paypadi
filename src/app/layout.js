import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Paypadi",
//   description: "Making Payment and Savings stress-free",

//   icon: "/paypadi_logo.png",
// };
export const metadata = {
  title: "Paypadi",
  description: "Making Payment and Savings stress-free",
  icons: {
    icon: "/paypadi_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
