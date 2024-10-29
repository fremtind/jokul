import type { Access, Where } from "payload/types";

export const ALL_ROLES = ["user", "writer", "editor", "admin"] as const;
type Role = (typeof ALL_ROLES)[number];

export const ROLE_DESCRIPTIONS: Record<Role, string> = {
    admin: "Administrator",
    editor: "Redaktør",
    writer: "Skribent",
    user: "Innlogget bruker",
};

// Alle brukere
export const authenticatedUsers: Access = ({ req: { user } }) => !!user;

// Brukere som kan redigere innhold
export const ROLES_THAT_CAN_EDIT: Role[] = ["admin", "editor", "writer"];
export const authenticatedContributors: Access = ({ req: { user } }) => user && ROLES_THAT_CAN_EDIT.includes(user.role);

// Brukere med redaktørrettigheter (kan opprette, slette og redigere innhold)
export const ROLES_THAT_CAN_DELETE: Role[] = ["admin", "editor"];
export const authenticatedEditors: Access = ({ req: { user } }) => user && ROLES_THAT_CAN_DELETE.includes(user.role);

// Brukere med adminrettigheter (kan utføre alle handlinger)
export const authenticatedAdmins: Access = ({ req: { user } }) => user && user?.role === "admin";

export const defaultReadAccess: Access = ({ req }) => {
    if (req.user) {
        return ROLES_THAT_CAN_EDIT.includes(req.user.role);
    }

    return {
        _status: {
            equals: "published",
        },
    };
};

export const isPublished: Where = {
    and: [
        {
            _status: { equals: "published" },
        },
        {
            published_date: { less_than: new Date().toJSON() },
        },
    ],
};

export const blogPostAccess: Access = () => isPublished;

export const pageIsPublic = (): Where => ({
    public: {
        equals: true,
    },
});
