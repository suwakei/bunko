import Image from "next/image";
import Link from "next/link";
import { BellIconButton } from "@/components/ui/Button/BellIconButton";
import { ProfileIconButton } from "@/components/ui/Button/ProfileIconButton"
import { CreateNewPageButton } from "@/components/ui/Button/CreateNewPageButton";
import { Tooltip } from "@/components/common/ToolTip";



export default function CommonHeader() {
return (
    <header className="bg-background/75 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-border/40">
    <div className="w-full flex h-16 items-center px-4 sm:px-6 lg:px-8">
            {/* 左側のロゴ */}
            <Link href="/Home" className="mr-auto flex items-center gap-2">
            <Image
                src="/logo.svg"
                alt="sakupage Logo"
                width={190}
                height={46}
                priority
            />
            </Link>

        {/* ベルマーク */}
        <nav className="flex items-center gap-4">
        <Tooltip text="お知らせ">
        <Link
            href="/notification" // 通知ページのパス（仮）"
        >
            <BellIconButton  />
        </Link>
        </Tooltip>

        {/* プロフィールアイコン */}
        <Tooltip text="プロフィール">
        <Link
            href="/profile" // プロフィールページのパス（仮）
        >
            <ProfileIconButton />
        </Link>
        </Tooltip>

        {/* 新規作成ボタン */}
        <Link
            href="/create" // 新規作成ページのパス（仮）
        >
            <CreateNewPageButton />
        </Link>
        </nav>
    </div>
    </header>
);
}