

import type { Metadata } from "next";
import { Inter, Space_Mono, Work_Sans } from "next/font/google";
import "./globals.scss";
import "./reuseable.scss";
import "./projects.scss";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {NavProvider} from '@/app/Contexts/navbarContext'


const inter = Inter({ subsets: ["latin"] });


const work_sans = Work_Sans({ subsets: ["latin"] });

const space_mono = Space_Mono({ subsets: ["latin"], weight: ['400', '700']})

export const metadata: Metadata = {
  title: "John Duru's Portfolio Website",
  description: "Portfolio page for John Duru | Frontend Developer",
};

export default function RootLayout ({children}: {children: React.ReactNode;}) {
  

  return (
    <html lang="en">
       
      <NavProvider>
      <body className={space_mono.className}>
      
        <Navbar/>
 
            {children}
   
        </body>
    
        </NavProvider>

    </html>
  );
}

