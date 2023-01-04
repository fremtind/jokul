import React, { FC, SVGAttributes } from "react";

export const CopySmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3H8V14H15V3ZM7 2V15H16V2H7Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13 18V15H12V17H5V6H7V5H4V18H13Z" fill="currentColor" />
    </svg>
);
