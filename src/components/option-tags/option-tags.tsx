'use client';
import React from "react";
import Image from "next/image";
import OptionTag from "../option-tag/option-tag";
import { TTag } from "@/types/types";
import useScrollOnDrag from 'react-scroll-ondrag';

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
    const ref = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useScrollOnDrag(ref);

    const renderImage = () => {
        if (!tags.length) {
            return null;
        }

        return <Image src={'/images/menu-options/right-arrow.svg'} alt="Right arrow" width={14} height={14} className={'hidden lg:inline ml-1'}/>;
    }

    const renderTags = () => {
        if (!tags.length) {
            return null;
        }

        return <div className="flex flex-wrap w-full gap-x-1 gap-y-2 lg:block lg:overflow-hidden lg:w-[60%]" {...events} ref={ref}>
            { tags.map((tag: TTag) => <OptionTag key={tag.tagId} tagId={tag.tagId} tagLabel={tag.tagLabel} onTagClick={onTagClick}/>)}
        </div>
    }
    
    return <div className="lg:flex">
        <span key={optionId} onClick={() => onOptionClick(optionId)} className="text-sm cursor-pointer" aria-roledescription="button">{optionLabel}</span>
        { renderImage() }
        { renderTags() }
    </div>;
};

export default OptionTags;