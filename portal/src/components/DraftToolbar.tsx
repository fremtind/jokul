import { Button } from "@fremtind/jokul/button";
import { DotsIcon } from "@fremtind/jokul/icon";
import { Menu, MenuItem } from "@fremtind/jokul/menu";

const DraftToolbar = () => {
    return (
        <div style={{ position: "fixed", bottom: "16px", right: "16px" }}>
            <Menu
                initialPlacement="bottom-end"
                triggerElement={
                    <Button
                        variant="ghost"
                        icon={<DotsIcon bold />}
                        iconPosition="right"
                        aria-label="Draft Toolbar"
                    />
                }
            >
                <MenuItem as="a" href="/api/draft-mode/disable">
                    Exit Draft Mode
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DraftToolbar;
