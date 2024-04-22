import { Variants } from 'framer-motion';

type ContainerType = Variants;

type ItemType = Variants;

type PictureType = Variants;

type RotateType = Variants;

const container: ContainerType = {
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
}


const itemX: ItemType = {
    hidden: {
        opacity: 0,
        x: -200
    },

    visible: {
        opacity: 1,
        x: 0,
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

const itemY: ItemType = {
    hidden: {
        opacity: 0,
        y: -200
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

const picture: PictureType = {
    hidden: {
        opacity: 0,
        x: 200
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
}

const rotate: RotateType = {
    hidden: {
        opacity: 0,
        rotate: 200
    },

    visible: {
        opacity: 1,
        rotate: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
}


export {container, itemX, itemY, picture, rotate}