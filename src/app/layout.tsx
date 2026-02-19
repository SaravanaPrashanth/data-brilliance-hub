import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
    title: "Saravana Prashanth Portfolio",
    description: "Portfolio of Saravana Prashanth — Data Quality Analyst",
    authors: [{ name: "Saravana Prashanth" }],
    openGraph: {
        title: "Saravana Prashanth Portfolio",
        description: "Showcasing experience, data projects, and analytics",
        type: "website",
        images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
