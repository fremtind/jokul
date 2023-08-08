import React, { FC, SVGAttributes } from "react";

export const LinkSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6464 6.35355C16.1347 4.84175 13.9509 4.75622 12.761 5.94614L10.3535 8.35355L9.64644 7.64644L12.0538 5.23903C13.7276 3.56524 16.5516 3.84452 18.3536 5.64644C20.1555 7.44836 20.4347 10.2724 18.761 11.9461L16.3535 14.3536L15.6464 13.6464L18.0539 11.239C19.2438 10.0491 19.1582 7.86534 17.6464 6.35355ZM15.3536 9.35354L9.35358 15.3535L8.64647 14.6464L14.6465 8.64643L15.3536 9.35354ZM8.35356 10.3535L5.94615 12.761C4.75623 13.9509 4.84176 16.1346 6.35356 17.6464C7.86535 19.1582 10.0491 19.2438 11.239 18.0538L13.6465 15.6464L14.3536 16.3535L11.9462 18.761C10.2724 20.4347 7.44837 20.1555 5.64645 18.3535C3.84453 16.5516 3.56525 13.7276 5.23904 12.0538L7.64645 9.64644L8.35356 10.3535Z"
            fill="currentColor"
        />
    </svg>
);
