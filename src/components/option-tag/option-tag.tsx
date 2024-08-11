
interface IOptionTag {
    tagLabel: string;
    tagId: string;
    onTagClick: (tagId: string) => void;
}

/**
 * Represents a tag option from a list of tags with a clickable label
 * @param param0 
 * @returns {React.ReactElement}
 */
const OptionTag = ({ tagId = '', tagLabel = '', onTagClick = () => {}}: IOptionTag) => {
    return <div key={tagId} onClick={() => onTagClick(tagId)} className="text-sm cursor-pointer inline ml-1 bg-gray-200 px-2 rounded active:text-white" aria-roledescription="button">{tagLabel}</div>;
};

export default OptionTag;