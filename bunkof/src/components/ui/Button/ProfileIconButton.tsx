import Image from "next/image";

export const ProfileIconButton = () => {
    let icon: string = "/nonUserIcon.svg"
    return (
        <button
            aria-label="プロフィールアイコン"
            className="p-2 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-transform duration-500 ease-out hover:scale-110"
        >
            <Image
                src={icon}
                alt="プロフィールアイコン"
                width={24} // ヘッダー用に少し小さく調整
                height={24} // アスペクト比を保つ
            />
        </button>
    )
}