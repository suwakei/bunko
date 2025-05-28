"use client"
import { useState, useEffect } from "react";

/**
 * 指定されたスクロールポイントに到達したかどうかを判定するカスタムフック。
 * @param {number}  activePoint - スクロール位置がこの値以上になった場合にアクティブと判断する閾値（ページ上端からのピクセル数）。
 * @return {boolean} スクロール位置が `activePoint` 以上であれば `true`、そうでなければ `false` を返す。
 */
export default function useScroll(activePoint: number): boolean {
    // 初期状態を現在のスクロール位置に基づいて設定
    const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        const scrollWindow = () => {
            // activePoint は依存配列を通じて最新の値が参照される
            if (window.scrollY >= activePoint) {
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