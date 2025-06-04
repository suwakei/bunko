import Link from 'next/link'

export default function NotFound() {
    return (
    <div>
        <h2>Not Found</h2>
        <Link href="/profile">マイページに戻る</Link>
    </div>
    )
}