import { navigationLinks } from "@/components/layout/header/navigation/menu/data";
import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import Link from "next/link";

export const NavigationList = () => {
    return (
        <Flex
            as="ul"
            alignItems="center"
            gap="none"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
        >
            {navigationLinks.map((link) => (
                <li key={link}>
                    <Button as={Link} href={`/${link}`} variant="ghost">
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Button>
                </li>
            ))}
        </Flex>
    );
};
