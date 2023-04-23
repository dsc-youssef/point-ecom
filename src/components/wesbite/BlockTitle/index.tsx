// Dependences
import { FC } from "react";

// Interface
interface WebsiteBlockTitleProps {
  title: string;
}

const BlockTitle: FC<WebsiteBlockTitleProps> = ({ title }) => {
  return (
    <h1 className="pt-5 pb-[10px] px-0 font-bold text-h3 border-b w-fit">{title}</h1>
  )
}

export default BlockTitle;
