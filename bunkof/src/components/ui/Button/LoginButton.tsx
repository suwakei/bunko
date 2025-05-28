import Image from "next/image"


export const LoginButton = () => {
    return (
        <button
            aria-label="ログインボタン"
            className="p-2 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-offset-2 transition-transform duration-300 ease-out hover:scale-110"
        >
            <Image
                src="/Buttons/LoginButton.svg"
                alt="ログインボタン"
                width={120}
                height={120}
            />
        </button>
    )
}