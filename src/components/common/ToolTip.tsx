"use client"
import { memo, useRef, ReactNode, useId } from "react";

// ツールチップ内に表示するためのprops
type Props = {
    text: string;
    children: ReactNode;
};

// ツールチップ
export const Tooltip: React.FC<Props> = memo((props) => {
  // ツールチップの文言自体のためのref
    const toolTipRef = useRef<HTMLDivElement>(null);
    const toolTipId = useId() // アクセシビリティのためのユニークid

  // マウスが乗ったらツールチップを表示
    const handleMouseEnter = () => {
    if (!toolTipRef.current) return;
    toolTipRef.current.style.opacity = "1";
    toolTipRef.current.style.visibility = "visible";
    };
  // マウスが離れたらツールチップを非表示
    const handleMouseLeave = () => {
    if (!toolTipRef.current) return;
    toolTipRef.current.style.opacity = "0";
    toolTipRef.current.style.visibility = "hidden";
    };

    return (
    <div 
    className="flex relative items-center"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <div
        id={toolTipId}
        role="tooltip"
        className="flex before:block absolute before:absolute top-full before:-top-1 left-1/2 before:left-1/2 invisible z-10 before:z-0 items-center py-[2px] px-2 mx-auto mt-2 before:w-2 before:h-2 text-xs text-white whitespace-nowrap before:bg-black bg-black rounded transition-all duration-150 transform before:transform before:rotate-45 -translate-x-1/2 before:-translate-x-1/2"
        ref={toolTipRef}
        >
        {props.text}
        </div>
        {/* トリガー要素 (props.children) */}
        {/* このdivがトリガーの役割を担い、aria-describedbyでツールチップと関連付け */}
        <div aria-describedby={toolTipId}>
        {props.children}
        </div>
    </div>
);
});

Tooltip.displayName = "Tooltip";
