import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lenscraft - Premium Streaming TV | +35,000 4K Channels",
  description:
    "Enjoy unlimited access to +35,000 live channels and +70,000 movies & series in HD/4K quality. Free 24h trial. Instant activation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased dark`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.gtranslate_settings = {"default_language":"en","native_language_names":1,"detect_browser_language":1,"wrapper_selector":".gtranslate_wrapper","float_switcher_open_direction":"bottom","flag_style":"3d"}` }} />
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="gtranslate_wrapper"></div>
        {children}
        {/* Microsoft Clarity */}
        <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","w923zy7nln");` }} />
      </body>
    </html>
  );
}
