import React, { useRef } from "react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

import { SubMenu, MenuIcon } from "~/pages/private/profile/menu";
const InlineSubMenu = (props) => {
    const ref = useRef();

    const EditInfo = (
        <Editable
            defaultValue={props.defaultValue}
            placeholder={`Enter ${props.field}`}
            colorScheme="brand"
            isDisabled={props.isDisabled}
            onSubmit={props.onSubmit}
        >
            <EditablePreview ref={ref} />
            <EditableInput />
        </Editable>
    );
    return (
        <>
            <SubMenu
                title={props.field}
                description={EditInfo}
                icon={<MenuIcon as={props.icon} />}
                onClick={() => ref.current.focus()}
                last={props.last ? "1" : "2"}
            />
        </>
    );
};

export default InlineSubMenu;
