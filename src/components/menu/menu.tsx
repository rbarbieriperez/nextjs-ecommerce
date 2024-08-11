'use client';

import React from "react";
import ExpandableButton from "../expandable-button/expandable-button";
import { TTagOption } from "@/types/types";

interface IMenu {
}


const componentsOptions: TTagOption[] = [
    {
        optionId: 'cpus',
        optionLabel: 'CPUs',
        tags: [
            {
                tagId: 'amd',
                tagLabel: 'AMD'
            },
            {
                tagId: 'intel',
                tagLabel: 'Intel'
            }
        ]
    },
    {
        optionId: 'motherboards',
        optionLabel: 'Motherboards',
        tags: [
            {
                tagId: 'msi',
                tagLabel: 'MSI'
            },
            {
                tagId: 'asus',
                tagLabel: 'Asus'
            },
            {
                tagId: 'gigabyte',
                tagLabel: 'Gigabyte'
            },
            {
                tagId: 'asrock',
                tagLabel: 'Asrock'
            },
            {
                tagId: 'pny',
                tagLabel: 'PNY'
            },
            {
                tagId: 'evga',
                tagLabel: 'EVGA'
            },
            {
                tagId: 'zotac',
                tagLabel: 'Zotac'
            }
        ]
    },
    {
        optionId: 'gpus',
        optionLabel: 'Graphic Cards'
    },
    {
        optionId: 'rams',
        optionLabel: 'Memory RAMs'
    },
    {
        optionId: 'storage',
        optionLabel: 'Storage'
    },
    {
        optionId: 'cases',
        optionLabel: 'Cases'
    },
    {
        optionId: 'cooling',
        optionLabel: 'Cooling'
    }
];

const peripheralsOptions: TTagOption[] = [
    {
        optionId: 'keyboards',
        optionLabel: 'Keyboards'
    },
    {
        optionId: 'mouses',
        optionLabel: 'Mouses'
    },
    {
        optionId: 'headsets',
        optionLabel: 'Headsets'
    },
    {
        optionId: 'webcams',
        optionLabel: 'Webcams'
    },
    {
        optionId: 'speakers',
        optionLabel: 'Speakers'
    },
    {
        optionId: 'monitors',
        optionLabel: 'Monitors'
    },
    {
        optionId: 'extras',
        optionLabel: 'Extras'
    }
];

const notebooksOptions: TTagOption[] = [
    {
        optionId: 'macbooks',
        optionLabel: 'Macbooks'
    },
    {
        optionId: 'amd-notebooks',
        optionLabel: 'AMD Notebooks'
    },
    {
        optionId: 'intel-notebooks',
        optionLabel: 'Intel Notebooks'
    },
    {
        optionId: 'gaming-notebooks',
        optionLabel: 'Gaming Notebooks'
    },
    {
        optionId: 'gadgets',
        optionLabel: 'Gadgets'
    }
];


const Menu = ({  }: IMenu) => {


    const handleOptionClick = (optionId: string) => {

    }

    return <aside className="w-[80%] h-full absolute top-0 left-0 p-4 bg-white lg:w-[30rem] lg:static shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <ExpandableButton
            id="components"
            imgSrc="images/menu-options/cpu.svg"
            label="Components"
            optionClick={handleOptionClick}
            options={componentsOptions}
        />

        <ExpandableButton
            id="peripherals"
            imgSrc="images/menu-options/mouse.svg"
            label="Peripherals"
            optionClick={handleOptionClick}
            options={peripheralsOptions}
        />

        <ExpandableButton
            id="notebooks"
            imgSrc="images/menu-options/laptop.svg"
            label="Notebooks"
            optionClick={handleOptionClick}
            options={notebooksOptions}
        />
    </aside>
    
    
}


export default Menu;