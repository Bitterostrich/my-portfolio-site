'use client'

import {AnimatePresence} from 'framer-motion'
import Navbar from "../../components/Navbar/Navbar";
import {NavProvider} from '@/app/Contexts/navbarContext'
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import './transitionprovider.scss'


const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    
    const pathname = usePathname()
    
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
            <motion.div 
            className="page-transition__entry"
            animate={{height: '0vh'}}
            exit={{height: '140vh'}}
            transition={{duration: 0.8, ease: 'easeOut'}}
            />

        <motion.div 
            className="page-transition__pathname"
            inital={{opacity: 1}}
            animate={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 1.2, ease: 'easeOut'}}
            >
                {pathname.substring(10)}
        </motion.div>
            <motion.div 
            className="page-transition__exit"
            initial={{height: '140vh'}}
            animate={{height: '0vh', transition: {delay: 0.5, duration: 1}}}
        
            />
                {children}
                </div>
        </AnimatePresence>
    )
}


export default TransitionProvider;