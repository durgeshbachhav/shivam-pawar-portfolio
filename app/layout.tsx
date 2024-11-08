import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Shivam Pawar - Video Editor",
    description:
    "Shivam Pawar's portfolio showcasing his expertise in video editing, motion graphics, and post-production.",
    generator: "Next.js",
    applicationName: "Shivam Pawar's Video Editing Portfolio",
    keywords: [
        "Shivam Pawar",
        "Video Editor",
        "Video Production",
        "Motion Graphics",
        "Post-Production",
        "Portfolio",
        "Creative Professional",
        "Filmmaker",
        "Videography",
        "Visual Effects",
        "Editing",
        "Multimedia"
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Shivam Pawar - Video Editor Portfolio",
        description:
      "Shivam Pawar's portfolio showcasing his expertise in video editing, motion graphics, and post-production.",
        url: "https://www.example.com/shivam-pawar",
        siteName: "Shivam Pawar's Portfolio",
        images: [
            {
                url: "./public/shivampawar.png",
                width: 1200,
                height: 630,
                alt: "Shivam Pawar - Video Editor",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shivam Pawar - Video Editor Portfolio",
        description:
      "Shivam Pawar's portfolio showcasing his expertise in video editing, motion graphics, and post-production.",
        creator: "@shivampawar",
        creatorId: "0000000000",
        images: ["./public/shivampawar.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "video-editing",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
