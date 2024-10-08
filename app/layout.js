import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App météo",
  description: "Projet Efrei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div class="topnav">
            <a class="active" href="/">
              Home
            </a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a>
              <div class="search-box">
                <button class="search-btn">
                  <i class=""></i>
                </button>
              </div>
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>Tsuki11 © 2024 Mon app météo.</p>
        </footer>
      </body>
    </html>
  );
}
