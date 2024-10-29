import type { CollectionConfig } from "payload/types";
import {
    ROLES_THAT_CAN_EDIT,
    ROLE_DESCRIPTIONS,
    authenticatedAdmins,
} from "../access/index";

const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    admin: {
        group: "Admin",
        useAsTitle: "name",
    },
    access: {
        read: authenticatedAdmins,
        create: authenticatedAdmins,
        delete: authenticatedAdmins,
        update: authenticatedAdmins,
        admin: ({ req: { user } }) =>
            user && ROLES_THAT_CAN_EDIT.includes(user.role),
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "role",
            type: "select",
            required: true,
            options: Object.entries(ROLE_DESCRIPTIONS).map(
                ([value, label]) => ({
                    value,
                    label,
                }),
            ),
            defaultValue: "user",
        },
    ],
};

export default Users;
