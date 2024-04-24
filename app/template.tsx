'use client'

import {useEffect, useState} from 'react';
import {AnimatePresence} from 'framer-motion'

import {NavProvider} from '@/app/Contexts/navbarContext'
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import '@/app/components/TransitionProvider/transitionprovider.scss'
import TransitionProvider from './components/TransitionProvider/TransitionProvider';



export default function Template ({ children }: { children: React.ReactNode })  {
    
    return (
        <TransitionProvider>
        {children}
        </TransitionProvider>
    )
}


