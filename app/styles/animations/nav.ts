import {Variants} from 'framer-motion'

type ContainerType = Variants;

type ItemType = Variants;

type ContentType = Variants;

const container: ContainerType = {
    visible: {
        transition: {
            staggerChildren: 0.35,
    },
},
}


const item: ItemType = {
    hidden: {
        x: -800,
    },

    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stifness: 110,
            mass: 0.9,
            ease: 'linear',
            duration: 0.8,
            staggerChildren: 0.35,
        }
    },
    exit: {
        x: -800,
        transition: {
            ease: 'easeInOut',
            duration: 0.8
        }
    }
}

const content: ContentType = {
    hidden: {
        opacity: 0,
        x: -200,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.8
        }
    },
}

export {item, container, content}