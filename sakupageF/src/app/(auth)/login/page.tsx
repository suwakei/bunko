"use client"
import Link from "next/link";
import React from "react";

const LoginPage = () => {
    return (
        <div>
            login page
            <Link href="/forgot-password">
                forgot pass
            </Link>
        </div>
    )
}

export default LoginPage;