import Image from "next/image"


export const SignUpButton = () => {
    return (
        <button
            aria-label="新規登録ボタン"
            className="p-2 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-offset-2 transition-transform duration-300 ease-out hover:scale-110"
        >
            <Image
                src="/Buttons/SignUpButton.svg"
                alt="新規登録ボタン"
                width={120}
                height={120}
            />
        </button>
    )
}