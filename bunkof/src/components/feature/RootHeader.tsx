"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";
import {LoginButton} from "@/components/ui/Button/LoginButton"
import { SignUpButton } from "@/components/ui/Button/SignUpButton";


type HideProps = {
    isActive: boolean;
}

const RootHeader = () => {
return (
    <header className="bg-background/75 backdrop-blur-lg border-b border-border/40">
        <div className="flex px-4 sm:px-6 lg:px-8">
            {/* 左側のロゴ */}
            <Image
                className="mr-auto"
                src="/logo.svg"
                alt="sakupage Logo"
                width={120}
                height={60}
                priority
            />


            <nav className="flex items-center">
                {/* ログインボタン */}
                <Link
                    href="/login/" // ログインページのパス（仮）
                >
                    <LoginButton />
                </Link>

                {/* アカウント作成ボタン */}
                <Link
                    href="/signup" // アカウント作成ページのパス（仮）
                >
                    <SignUpButton />
                </Link>
            </nav>
    </div>
    </header>
);
}

export default RootHeader;