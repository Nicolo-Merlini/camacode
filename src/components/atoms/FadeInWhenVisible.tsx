import { motion } from 'framer-motion';
import React, { FC } from 'react'

const FadeInWhenVisible: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.99 }
            }}
        >
            {children}
        </motion.div>

    );
}

export default FadeInWhenVisible