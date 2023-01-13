import React from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @param src : string
 * @param content: string
 * @constructor
 */
export default function TextLink({classname, src, content}) {
    // METHODS
    return (
        <>
            <Link href={src} className={"a-link " + classname}>{content}</Link>
        </>
    );
}