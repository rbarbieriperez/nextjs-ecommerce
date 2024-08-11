
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
    return <div  className={`fixed w-full h-full ${expanded ? "block" : "hidden" } lg:hidden`}>
        <div onClick={closeCallback} className="top-0 h-full w-full bg-gray-300 opacity-40"></div>
        { children }
    </div>;
};

export default MenuWrapper;