"use client"
import { useState, useEffect } from "react";


/**
 * @param {number}  activePoint - 表示のポイントを数値で取得
 * @return {boolean} 表示、非表示のbool値を返却する
 */
export default function useScroll(activePoint: number): boolean {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const scrollWindow = () => {
            const ap = activePoint;
            let scroll = 0;
            scroll = window.scrollY;
            if (ap <= scroll) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener("scroll", scrollWindow);
        return () => {
            window.removeEventListener("scroll", scrollWindow);
        }
    }, [activePoint]);

    return isActive;
}