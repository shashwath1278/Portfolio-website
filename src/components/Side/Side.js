import React, { useState } from 'react';
import './Side.css';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Links from './links/Links';

const Side = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(150% at 0% 0%)", // Larger circle at the top-left corner
            transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 1,
            },
        },
        closed: {
            clipPath: "circle(0% at 0% 0%)", // Small circle at the top-left corner
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.7,
            },
        },
    };

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="background" variants={variants}>
                <Links />  {/* Render the Links inside the sidebar */}
            </motion.div>
            <button className="menu-button" onClick={() => setOpen(prev => !prev)}>
                {open ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
        </motion.div>
    );
};

export default Side;
