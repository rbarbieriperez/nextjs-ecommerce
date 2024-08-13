'use client';
import React from "react";
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


    const renderTags = () => {
        if (!tags.length) {
            return null;
        }

        return <div className="flex flex-wrap w-full gap-x-1 gap-y-2 mt-1">
            { tags.map((tag: TTag) => <OptionTag key={tag.tagId} tagId={tag.tagId} tagLabel={tag.tagLabel} onTagClick={onTagClick}/>)}
        </div>
    }
    
    return <div className="">
        <span key={optionId} onClick={() => onOptionClick(optionId)} className="text-sm cursor-pointer" aria-roledescription="button">{optionLabel}</span>
        { renderTags() }
    </div>;
};

export default OptionTags;