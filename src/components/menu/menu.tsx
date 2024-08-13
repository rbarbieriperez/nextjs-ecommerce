"use client";

import React from "react";
import ExpandableButton from "../expandable-button/expandable-button";
import { TTagOption } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";


const ICON_SIZE = 32;

const componentsOptions: TTagOption[] = [
  {
    optionId: "cpus",
    optionLabel: "CPUs",
    tags: [
      {
        tagId: "amd",
        tagLabel: "AMD",
      },
      {
        tagId: "intel",
        tagLabel: "Intel",
      },
    ],
  },
  {
    optionId: "motherboards",
    optionLabel: "Motherboards",
    tags: [
      {
        tagId: "msi",
        tagLabel: "MSI",
      },
      {
        tagId: "asus",
        tagLabel: "Asus",
      },
      {
        tagId: "gigabyte",
        tagLabel: "Gigabyte",
      },
      {
        tagId: "asrock",
        tagLabel: "Asrock",
      },
      {
        tagId: "pny",
        tagLabel: "PNY",
      },
      {
        tagId: "evga",
        tagLabel: "EVGA",
      },
      {
        tagId: "zotac",
        tagLabel: "Zotac",
      },
    ],
  },
  {
    optionId: "gpus",
    optionLabel: "Graphic Cards",
    tags: [
      {
        tagId: "nvidia",
        tagLabel: "Nvidia",
      },
      {
        tagId: "amd",
        tagLabel: "AMD",
      },
    ],
  },
  {
    optionId: "rams",
    optionLabel: "Memory RAMs",
  },
  {
    optionId: "storage",
    optionLabel: "Storage",
  },
  {
    optionId: "cases",
    optionLabel: "Cases",
  },
  {
    optionId: "cooling",
    optionLabel: "Cooling",
  },
];

const peripheralsOptions: TTagOption[] = [
  {
    optionId: "keyboards",
    optionLabel: "Keyboards",
  },
  {
    optionId: "mouses",
    optionLabel: "Mouses",
  },
  {
    optionId: "headsets",
    optionLabel: "Headsets",
  },
  {
    optionId: "webcams",
    optionLabel: "Webcams",
  },
  {
    optionId: "speakers",
    optionLabel: "Speakers",
  },
  {
    optionId: "monitors",
    optionLabel: "Monitors",
  },
  {
    optionId: "extras",
    optionLabel: "Extras",
  },
];

const notebooksOptions: TTagOption[] = [
  {
    optionId: "macbooks",
    optionLabel: "Macbooks",
  },
  {
    optionId: "amd-notebooks",
    optionLabel: "AMD Notebooks",
  },
  {
    optionId: "intel-notebooks",
    optionLabel: "Intel Notebooks",
  },
  {
    optionId: "gaming-notebooks",
    optionLabel: "Gaming Notebooks",
  },
  {
    optionId: "gadgets",
    optionLabel: "Gadgets",
  },
];

const COLLAPSED_STYLES = "";

const EXPANDED_STYLES = "";

interface IMenu {
  className?: string;
  openSettings?: () => void;
}

type TItemExpanded = {
  components: boolean;
  peripherals: boolean;
  notebooks: boolean;
};


const Menu = ({ className, openSettings = () => {} }: IMenu) => {
  const [menuCollapsed, setMenuCollapsed] = React.useState(false);
  const [itemsExpanded, setItemsExpanded] = React.useState<TItemExpanded>({
    components: false,
    peripherals: false,
    notebooks: false,  
  });

  const handleOptionClick = (optionId: keyof typeof itemsExpanded) => {
    setItemsExpanded((prev) => ({...prev, [optionId]: !itemsExpanded[optionId]}));
  };

  return (
    <>
      {menuCollapsed ? (
        <MenuCollapsed onExpand={() => setMenuCollapsed(false)} 
        onCategoryClick={(id) => {
          setMenuCollapsed(false);
          handleOptionClick(id);
        }} 
        openSettings={openSettings}
         />
      ) : (
        <motion.aside
          className={`w-[80%] md:w-[60%] pb-8 flex flex-col h-full absolute top-0 left-0 p-4 bg-white lg:w-[40%] xl:w-[20%] lg:static shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${className}`}
          initial={{ transform: 'translateX(-100%)' }}
          animate={{ transform: 'translateX(0)' }}
          transition={{ ease: 'easeIn', duration: .1 }}
        >
          <div className="overflow-scroll flex gap-y-4 flex-col">
            <ExpandableButton
              id="components"
              imgSrc="images/menu-options/cpu.svg"
              label="Components"
              onClick={(e) => handleOptionClick(e as keyof typeof itemsExpanded)}
              options={componentsOptions}
              expanded={itemsExpanded.components}
            />

            <ExpandableButton
              id="peripherals"
              imgSrc="images/menu-options/mouse.svg"
              label="Peripherals"
              onClick={(e) => handleOptionClick(e as keyof typeof itemsExpanded)}
              options={peripheralsOptions}
              expanded={itemsExpanded.peripherals}
            />

            <ExpandableButton
              id="notebooks"
              imgSrc="images/menu-options/laptop.svg"
              label="Notebooks"
              onClick={(e) => handleOptionClick(e as keyof typeof itemsExpanded)}
              options={notebooksOptions}
              expanded={itemsExpanded.notebooks}
            />
          </div>

          <div className="flex justify-between mt-auto mb-[2rem] w-full border-t pt-1 mt-[-.5rem]">
            <Image
              src={"images/settings.svg"}
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt="Settings"
              className="cursor-pointer"
            />

            <Image
              src={
                menuCollapsed
                  ? "images/collapse-right.svg"
                  : "images/collapse-left.svg"
              }
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt="Collapse menu"
              className="cursor-pointer hidden lg:block"
              onClick={() => setMenuCollapsed(!menuCollapsed)}
            />
          </div>
        </motion.aside>
      )}
    </>
  );
};

export default Menu;

interface IMenuCollapsed  extends IMenu {
    onCategoryClick?: (id: keyof TItemExpanded) => void;
    onExpand?: () => void;
}

const MenuCollapsed = ({onCategoryClick = () => {}, openSettings = () => {}, onExpand = () => {}}: IMenuCollapsed) => {
  return <motion.aside
    className="hidden lg:flex h-full p-2 w-fit flex-col justify-between shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
    initial={{ opacity: 0, transform: 'translateX(-100%)' }}
    animate={{ opacity: 1, transform: 'translateX(0)' }}
    transition={{ ease: 'easeIn', duration: .1 }}
   >
    <div className="flex flex-col gap-y-2">
        <Image onClick={() => onCategoryClick('components')} className="cursor-pointer" src={"images/menu-options/cpu.svg"} alt="Components" width={ICON_SIZE} height={ICON_SIZE}/>
        <Image onClick={() => onCategoryClick('peripherals')} className="cursor-pointer" src={"images/menu-options/mouse.svg"} alt="Peripherals" width={ICON_SIZE} height={ICON_SIZE}/>
        <Image onClick={() => onCategoryClick('notebooks')} className="cursor-pointer" src={"images/menu-options/laptop.svg"} alt="Notebooks" width={ICON_SIZE} height={ICON_SIZE}/>
    </div>
    

    <div className="flex flex-col gap-y-2 mb-[3.5rem] border-t pt-2">
      <Image className="cursor-pointer" onClick={openSettings} src={"images/settings.svg"} alt="Settings" width={ICON_SIZE} height={ICON_SIZE}/>
      <Image className="cursor-pointer" onClick={onExpand} src={"images/collapse-right.svg"} alt="Collapse menu" width={ICON_SIZE} height={ICON_SIZE}/>
    </div>
  </motion.aside>;
};
