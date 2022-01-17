import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function Button(props: {
  bradius?: any;
  text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) {
  return (
    <button
      type="button"
      className={`text-white bg-[#17419E] border-2 border-[#17419E]
      py-1.5 px-2.5 sm:px-4 md:px-5 lg:py-2 lg:px-8
      font-[SF_Pro_Display_Regular] 
      text-sm md:text-base sm:text-base mid:text-base
      rounded-sm
      transition-all delay-100 duration-400
      hover:bg-white text-[#17419E]
      `}
    >
      {props.text}
    </button>
  );
}
