import { Box, IconButton } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'iconoir-react';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 350) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Aggiungi un event listener per il scroll quando il componente viene montato
        window.addEventListener("scroll", handleScroll);

        // Rimuovi l'event listener quando il componente viene smontato per evitare memory leak
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            className=' lg:hidden w-fit h-fit '
        >

            {isVisible && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <AnimatePresence initial={false}>
                    <IconButton
                        variant={'black'}
                        aria-label='scroll button'
                        position={'fixed'}
                        bottom={3}
                        right={3}
                        size='sm'
                        width={['60px', '60px', '60px', '60px', '60px']}
                        height={['60px', '60px', '60px', '60px', '60px']}
                        borderRadius={'full'}
                        icon={<ArrowUp
                            //width={'25px'}
                            strokeWidth={'3px'}
                        />}
                        zIndex={40}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth" // Opzione per lo scorrimento fluido
                            });
                        }}

                    />

                </AnimatePresence>

            </motion.div>}


        </Box>

    )
}

export default ScrollToTop