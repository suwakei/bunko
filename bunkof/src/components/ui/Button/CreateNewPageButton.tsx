import Image from "next/image"


export const CreateNewPageButton = () => {
    return (
        <button
            aria-label="新規ページ作成ボタン"
            className="p-2 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-offset-2 transition-transform duration-300 ease-out hover:scale-110"
        >
            <Image
                src="/Buttons/CreateNewPageButton.svg"
                alt="新規ページ作成ボタン"
                width={120}
                height={120}
            />
        </button>
    )
}