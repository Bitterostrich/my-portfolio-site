import { Variants } from 'framer-motion';

type ContainerType = Variants;

type ItemType = Variants;


const container: ContainerType = {
    visible: {
        transition: {
            staggerChildren: 0.35,
        },
    },
}


const item: ItemType = {
    hidden: {
        opacity: 0,
        y: 200
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },

    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
        
    }
}


export {container, item}