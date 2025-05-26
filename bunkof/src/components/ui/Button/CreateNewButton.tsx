import Image from "next/image"


export const CreateNewButton = () => {
    return (
        <button
            aria-label="新規作成ボタン"
            className="p-2 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-offset-2 transition-transform duration-300 ease-out hover:scale-110"
        >
            <Image
                src="/createNewButton.svg"
                alt="新規作成ボタン"
                width={100}
                height={100}
            />
        </button>
    )
}