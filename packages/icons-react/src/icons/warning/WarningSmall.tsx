import React, { FC, SVGAttributes } from "react";

export const WarningSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.23022 3.08312C8.9811 1.63896 11.0135 1.63896 11.7644 3.08312L17.7624 15.013C18.4671 16.3683 17.5018 18 15.9953 18H3.99937C2.49286 18 1.52757 16.3683 2.23227 15.013L8.23022 3.08312ZM9.24755 7H10.747L10.747 12H9.24755L9.24755 7ZM9.9973 15.5175C10.5494 15.5175 10.997 15.062 10.997 14.5C10.997 13.938 10.5494 13.4825 9.9973 13.4825C9.4452 13.4825 8.99764 13.938 8.99764 14.5C8.99764 15.062 9.4452 15.5175 9.9973 15.5175Z"
            fill="currentColor"
        />
    </svg>
);
