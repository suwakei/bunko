import Image from "next/image";
import Link from "next/link";
import { BellIconButton } from "@/components/ui/Button/BellIconButton";
import { ProfileIconButton } from "@/components/ui/Button/ProfileIconButton"
import { CreateNewButton } from "@/components/ui/Button/CreateNewButton";



export default function Header() {
return (
    <header className="bg-background/75 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-border/40">
    <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* 左側のロゴ */}
        <Link href="/" className="mr-auto flex items-center gap-2">
        <Image
            src="/logo.svg"
            alt="Page Maker Logo"
            width={120} // ヘッダー用に少し小さく調整
            height={26} // アスペクト比を保つ
            priority
        />
        </Link>

        {/* ベルマーク */}
        <nav className="flex items-center gap-4">
        <Link
            href="/notification" // 通知ページのパス（仮）"
        >
            <BellIconButton  />
        </Link>

        {/* プロフィールアイコン */}
        <Link
            href="/profile" // マイページページのパス（仮）
        >
            <ProfileIconButton />
        </Link>

        {/* 新規作成ボタン */}
        <Link
            href="/create" // 新規作成ページのパス（仮）
        >
            <CreateNewButton />
        </Link>
        </nav>
    </div>
    </header>
);
}