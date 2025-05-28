import "./globals.css";
import NavigationBar from "@/app/_components/navigation-bar";
import React from "react";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>The Powerpuff Girls</title>
            <meta name="description" content="A website with basic information about The Powerpuff Girls"/>
        </head>
        <body>
        <nav>
            <NavigationBar/>
        </nav>
        {children}
        </body>
        </html>
    );
}
