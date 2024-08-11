'use client';
import Image from "next/image";
import OptionTag from "../option-tag/option-tag";
import { TTag } from "@/types/types";

interface IOptionTags {
    optionLabel?: string,
    optionId?: string,
    onTagClick?: (tagId: string) => void,
    onOptionClick?: (optionId: string) => void;
    tags?: TTag[];
}

/**
 * Render a category clickable button with an optional list of tags to identify category option
 * @param param0 
 * @returns { React.ReactElement }
 */
const OptionTags = ({ optionId = '', optionLabel = '', onOptionClick = () => {}, onTagClick = () => {}, tags = []}: IOptionTags) => {
    
    const renderImage = () => {
        if (!tags.length) {
            return null;
        }

        return <Image src={'/images/menu-options/right-arrow.svg'} alt="Right arrow" width={14} height={14} className={'inline ml-1'}/>;
    }
    
    return <div>
        <span key={optionId} onClick={() => onOptionClick(optionId)} className="text-sm cursor-pointer" aria-roledescription="button">{optionLabel}</span>
        { renderImage()}
        { tags.map((tag: TTag) => <OptionTag key={tag.tagId} tagId={tag.tagId} tagLabel={tag.tagLabel} onTagClick={onTagClick}/>)}
    </div>;
};

export default OptionTags;