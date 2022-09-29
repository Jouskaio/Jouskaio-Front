import React from "react";
// @ts-ignore
import Link from 'next/link';

export default function TextSpanXXXL(props : {content : string, classname: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <span className={"a-spanXXXL " + classname}>{content}</span>
        </>
    );
}