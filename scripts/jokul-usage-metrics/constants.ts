export const HELP_TEXT = `Samle inn øyeblikksbilder av Jøkul-bruk fra GitHub-repoer og send dem til Mixpanel.

Bruk:
  node --experimental-strip-types ./scripts/report-jokul-usage-to-mixpanel.ts [--dry-run] [--verbose] [--env-file .env.metrics]

Påkrevde miljøvariabler:
  GITHUB_TOKEN
  GITHUB_OWNER
  MIXPANEL_PROJECT_TOKEN

Valgfrie miljøvariabler:
  GITHUB_OWNER_TYPE=org|user         Standard er org
  GITHUB_INCLUDE_ARCHIVED=true|false Standard er false
  GITHUB_INCLUDE_FORKS=true|false    Standard er false
  GITHUB_REPOSITORIES=repo-a,repo-b  Eksakt tillattliste for repoer
  GITHUB_EXCLUDE_REPOSITORIES=...    Eksakt blokkeringsliste for repoer
  JOKUL_USAGE_ENV_FILE=...           Foretrekk --env-file ved lokal kjøring
  JOKUL_USAGE_TEAM_MAP_PATH=...      Standard er ./.github/jokul-usage-team-map.json
  JOKUL_USAGE_MAX_SOURCE_FILES_PER_WORKSPACE=150
  JOKUL_USAGE_MAX_SOURCE_FILE_BYTES=150000
  MIXPANEL_API_URL=...               Standard er https://api-eu.mixpanel.com/track

Format for teamkartlegging:
{
  "defaultTeam": "unknown",
  "repoTeams": {
    "owner/repo-name": "team-a",
    "repo-name": "team-b"
  },
  "rules": [
    { "repoPattern": "^owner/platform-", "team": "platform" },
    { "repoPattern": "^owner/mono-repo$", "pathPattern": "^apps/claims/", "team": "claims" }
  ]
}
`;

export const DEPENDENCY_FIELDS = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
];

export const JOKUL_PACKAGE_PATTERN = /^@fremtind\/(jokul|jkl(?:-.+)?)$/;

export const SOURCE_FILE_EXTENSIONS = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".ts",
    ".cjs",
    ".mts",
    ".cts",
    ".scss",
    ".css",
    ".less",
]);

export const STYLESHEET_FILE_EXTENSIONS = new Set([".css", ".scss", ".less"]);

export const EVENT_NAMES = {
    packageUsage: "Pakkebruk",
    repositoryUsage: "Prosjektbruk",
    componentUsage: "Komponentbruk",
    propUsage: "Propbruk",
    tokenUsage: "Tokenbruk",
    hookUsage: "Hookbruk",
    utilityUsage: "Hjelpefunksjonsbruk",
    themeUsage: "Temabruk",
    deprecatedApiUsage: "Foreldet API-bruk",
    scanCompleted: "Bruksskann fullført",
};

export const COMPONENT_CATALOG_ROOTS = [
    "packages/jokul/src/components",
    "packages/jokul/src/components-beta",
];

export const DEPRECATED_SYMBOL_SCAN_ROOTS = [
    ...COMPONENT_CATALOG_ROOTS,
    "packages/jokul/src/hooks",
    "packages/jokul/src/utilities",
];
