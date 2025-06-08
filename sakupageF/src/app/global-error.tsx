"use client"

export default function GlobalError(
    {
        error,
        reset
    }: {
        error: Error,
        reset: () => void
    }
) {
    return (
        <html>
            <body>
                <h2>global-error</h2>
                <h3>{error.message}</h3>
            </body>
        </html>
    )
}