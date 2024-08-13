import { motion } from "framer-motion";
interface IMenuWrapper {
    children: React.ReactElement[] | React.ReactElement;
    closeCallback: () => void;
    expanded: boolean;
}

/**
 * A wrapper component for the menu, it handles the mobile behavior of the menu
 * Including close/open logic
 * @returns {React.ReactElement}
 */
const MenuWrapper = ({ children, closeCallback, expanded = false }: IMenuWrapper) => {
    return <div  className={`fixed w-full h-full ${expanded ? "block" : "hidden" } lg:hidden z-50 transition-all`}>
        <div onClick={closeCallback} className="top-0 h-full w-full bg-gray-300 opacity-40"></div>
        <motion.div 
            className={`${expanded ? 'block' : 'hidden'} absolute top-0 z-50 w-full h-full`} 
            animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ ease: 'easeInOut', duration: .1}}
        >
            { children }
        </motion.div>
    </div>;
};

export default MenuWrapper;