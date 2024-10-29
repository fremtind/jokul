import { motion } from "framer-motion";
import React, { FC } from "react";
import "./style.scss";

export const FramerMotionExample: FC = () => {
    return (
        <div className="wrapper jkl-portal-paragraph">
            <div className="example-container">
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ rotate: 45, scale: 0.95 }}
                />
            </div>
        </div>
    );
};
