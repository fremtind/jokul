import React, { VFC } from "react";
import { motion } from "framer-motion";
import "./style.scss";

export const FramerMotionExample: VFC = () => {
    return (
        <div className="wrapper jkl-portal-paragraph">
            <div className="example-container">
                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ rotate: 45, scale: 0.95 }} />
            </div>
        </div>
    );
};
