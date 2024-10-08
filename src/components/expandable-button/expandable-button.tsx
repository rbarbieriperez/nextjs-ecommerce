'use client';

import Image from "next/image";
import React from 'react';
import OptionTags from "../option-tags/option-tags";
import { TTagOption } from "@/types/types";


interface IExpandableButton {
    id?: string;
    imgSrc?: string;
    label?: string;
    onClick?: (id: string) => void;
    className?: string;
    options?: TTagOption[];
    optionClick?: (optionId: string) => void;
    expanded?: boolean;
}

const ExpandableButton = ({ id = '', imgSrc = '', label = '', onClick = () => {} , className = '', options = [], optionClick = () => {}, expanded = false }: IExpandableButton) => {
    const [_expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        setExpanded(expanded)
    }, [expanded]);
    
    /**
     * Render image
     * @returns {React.ReactElement}
     */
    const renderImg = () => {
        if (!imgSrc) {
            return null;
        }

        return <Image
            src={imgSrc}
            alt="Expandable button"
            width={24}
            height={24}
            className=""
        />
    }

    /**
     * Render button label
     * @returns {React.ReactElement}
     */
    const renderLabel = () => {
        if (!label) {
            return null;
        }

        return <span className="">{label}</span>
    }

    /**
     * Render options
     * @returns {React.ReactElement}
     */
    const renderOptions = () => {
        if (!options.length) {
            return null;
        }

        return <div className={`flex flex-col gap-y-2 lg:gap-y-1 items-start ml-7 ${_expanded ? 'block' : 'hidden '}`}>
            {options.map((option) => {
                return <div key={option.optionId} className="w-full">
                    <OptionTags key={option.optionId} optionId={option.optionId} optionLabel={option.optionLabel} tags={option.tags} onOptionClick={() => {}} onTagClick={(id) => console.log(id)}/>
                </div>
            })}
        </div>
    }
    
    return <div>
        <button onClick={() => {
            setExpanded(!_expanded);
            onClick(id);
        }} className={`flex gap-x-1 ${className}`}>
            {renderImg()}
            {renderLabel()}
        </button>
        {renderOptions()}
    </div> 
    
};

export default ExpandableButton;