'use client'

import {useEffect, useState} from 'react';
import {AnimatePresence} from 'framer-motion'

import {NavProvider} from '@/app/Contexts/navbarContext'
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import '@/app/components/TransitionProvider/transitionprovider.scss'


export default function Template ({ children }: { children: React.ReactNode })  {

    console.log(children)
    
    const [prevPathname, setPrevPathname] = useState<any>(null)

    const pathname = usePathname()

    useEffect(() => {

  

         if (prevPathname === null) {
            setPrevPathname(pathname)
            console.log("This is the previous pathname when null", prevPathname)
        } else if (pathname !== prevPathname) {
            setPrevPathname(pathname)
            console.log("This is the previous pathname when the pathname is not thesame as the previous pathname:", prevPathname)
        }

    }, [pathname])

    const isNavigating = prevPathname !== null 
    
    return (
        <AnimatePresence >
            <div className="page-transition" key={pathname}>
        

                        {isNavigating && (
                                                            <motion.div 
                                                            className="page-transition__entry"
                            
                                                            animate={{height: '0vh'}}
                                                            exit={{height: '140vh'}}
                                                            transition={{duration: 0.8, ease: 'easeOut'}}
                                                            />
                        )}

                      

                        {isNavigating && (
                                                            <motion.div 
                                                            className="page-transition__pathname"
                                                            initial={{opacity: 1}}
                                                            animate={{opacity: 0}}
                                                            exit={{opacity: 0}}
                                                            transition={{duration: 1.2, ease: 'easeOut'}}
                                                            >
                                                                {pathname.substring(10)}
                                                        </motion.div>
                        )}

        

                        {isNavigating && (
                                                        <motion.div 
                                                        className="page-transition__exit"
                                                        initial={{height: '140vh'}}
                                                        animate={{height: '0vh',  transition: {delay: 0.8, duration: 1, ease:'easeOut'}}}
                                                       
                                                    />
                        )}


        
        
                {children}
                </div>
        </AnimatePresence>
    )
}


