# Jøkul Design System - Usage Instructions

## What is Jøkul?

Jøkul is Fremtind's design system providing React components and CSS/SCSS stylesheets. All components are distributed as a single package: `@fremtind/jokul`. Documentation: https://jokul.fremtind.no

## Installation

```bash
npm install @fremtind/jokul
# or
pnpm add @fremtind/jokul
```

**Note**: Jøkul is a pure ESM module. Ensure your project supports ESM imports.

## Required Setup

### 1. Core Styles (Required)

Always import core styles before using any components:

```tsx
import "@fremtind/jokul/styles/core/core.scss";
```

Or in SCSS:
```scss
@use "@fremtind/jokul/styles/core/core";
```

### 2. Fonts

Make font files available at `/fonts` on your server. Font files are located at:
`node_modules/@fremtind/jokul/src/fonts/`

```scss
@use "@fremtind/jokul/styles/fonts" with (
    $webfonts-dir: "path/to/node_modules/@fremtind/jokul/src/fonts"
);
```

### 3. Vite Configuration

If using Vite, enable the modern Sass API:

```js
// vite.config.js
css: {
    preprocessorOptions: {
        scss: { api: 'modern' },
    },
},
```

## Import Patterns

### Components

```tsx
import { Button } from "@fremtind/jokul/button";
import { TextInput } from "@fremtind/jokul/text-input";
import { Select } from "@fremtind/jokul/select";
import { Modal } from "@fremtind/jokul/modal";
import { Card } from "@fremtind/jokul/card";
```

### Component Styles

Import styles alongside components:

```tsx
// Option 1: SCSS with automatic dependencies (recommended)
import "@fremtind/jokul/styles/components/button/_index.scss";

// Option 2: In SCSS files
@use "@fremtind/jokul/styles/components/button";

// Option 3: Pre-built CSS (no dependency resolution)
import "@fremtind/jokul/styles/components/button/button.min.css";
```

### Hooks

```tsx
import { useAnimatedDetails, useLocalStorage, useScreen } from "@fremtind/jokul/hooks";
```

### Utilities

```tsx
import { formatTelefonnummer, formatKontonummer, formatValuta } from "@fremtind/jokul/utilities";
```

### Core Types

```tsx
import type { WithChildren } from "@fremtind/jokul/core";
```

## Theming

### Light/Dark Mode

Set `data-theme` on a container element:

```tsx
<div className="jkl" data-theme="light">
    {/* Components inherit light theme */}
</div>

<div className="jkl" data-theme="dark">
    {/* Components inherit dark theme */}
</div>
```

### Size Modes

Control component sizing with `data-size` on container elements. Values: `small`, `medium` (default), `large`.

```tsx
// Set size on a section - all Jøkul components inside will adapt
<section data-size="small">
    <Button>Compact button</Button>
    <TextInput label="Compact input" />
</section>

<section data-size="large">
    <Button>Large button</Button>
</section>
```

**Important**: Do NOT set size as a prop on individual components. Always use `data-size` on container elements.

## Accessibility Requirements

### Buttons Without Visible Text

When creating icon-only buttons, always provide an accessible name:

```tsx
// ✅ Correct
<Button icon={<SaveIcon />} aria-label="Save document" />
<Button icon={<CloseIcon />} title="Close dialog" />

// ❌ Incorrect - no accessible name
<Button icon={<SaveIcon />} />
```

### Clickable Cards

When using clickable cards, set `aria-label` to prevent screen readers from reading all content:

```tsx
<Card clickable as="a" href="/insurance" aria-label="View insurance details">
    <h3>Home Insurance</h3>
    <p>Coverage: Full</p>
    <p>Price: 299 kr/month</p>
</Card>
```

### Form Components

All form components require a `label` prop:

```tsx
<TextInput label="Email address" name="email" />
<Select label="Choose country" items={countries} />
<Checkbox label="I accept the terms" />
```

## Tailwind Integration

### Tailwind v3

```ts
// tailwind.config.ts
import { jokulPreset } from "@fremtind/jokul/tailwind";

export default {
    presets: [jokulPreset],
    corePlugins: {
        preflight: false, // Disable Tailwind reset to avoid conflicts
    },
};
```

### Tailwind v4

```css
@import "tailwindcss";
@import "@fremtind/jokul/tailwind/v4";
```

### Tailwind Classes

```tsx
// Semantic colors
<div className="bg-background-page text-text-default">
    <p className="text-text-subdued">Muted text</p>
</div>

// Typography
<h1 className="title">Page Title</h1>
<p className="body">Body text</p>

// Spacing (Jøkul scale)
<div className="mt-24 md:mt-40 p-16">Content</div>
```

## Common Components

### Button

```tsx
import { Button } from "@fremtind/jokul/button";

// Variants: primary, secondary, ghost
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Tertiary Action</Button>

// With icon
<Button variant="primary" icon={<SaveIcon />}>Save</Button>
<Button variant="primary" icon={<ArrowIcon />} iconPosition="right">Next</Button>

// Loading state
<Button 
    variant="primary" 
    loader={{ showLoader: isLoading, textDescription: "Saving..." }}
>
    Save
</Button>
```

### Form Inputs

```tsx
import { TextInput } from "@fremtind/jokul/text-input";
import { TextArea } from "@fremtind/jokul/text-area";
import { Select } from "@fremtind/jokul/select";
import { Checkbox } from "@fremtind/jokul/checkbox";
import { RadioButtons } from "@fremtind/jokul/radio-button";

<TextInput 
    label="Full name" 
    helpLabel="As shown on your ID"
    errorLabel={errors.name}
/>

<Select 
    label="Country" 
    items={[
        { label: "Norway", value: "NO" },
        { label: "Sweden", value: "SE" },
    ]}
    onChange={handleChange}
/>
```

### Modal

```tsx
import { Modal, ModalContainer, ModalHeader, ModalContent, ModalActions } from "@fremtind/jokul/modal";

<Modal isOpen={isOpen} onDismiss={handleClose}>
    <ModalContainer>
        <ModalHeader>Confirm Action</ModalHeader>
        <ModalContent>Are you sure you want to proceed?</ModalContent>
        <ModalActions>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
        </ModalActions>
    </ModalContainer>
</Modal>
```

## Typography

Use text styles via SCSS mixins or Tailwind classes:

```scss
@use "@fremtind/jokul/styles/core/jkl";

.my-heading {
    @include jkl.text-style("heading-1");
}

.my-body-text {
    @include jkl.text-style("paragraph-medium");
}

.my-small-text {
    @include jkl.text-style("text-small");
}
```

Available styles: `title`, `heading-1` through `heading-5`, `paragraph-large`, `paragraph-medium`, `paragraph-small`, `text-large`, `text-medium`, `text-small`, `text-micro`.

## CSS Class Naming

All Jøkul classes use the `jkl-` prefix:
- `jkl-button`, `jkl-button--primary`, `jkl-button--secondary`
- `jkl-text-input`, `jkl-text-input--invalid`
- `jkl-card`, `jkl-card--high`

## Migration Notes (v4.0)

If upgrading from older versions:

1. **Replace `data-density` with `data-size`**: `data-density="compact"` → `data-size="small"`
2. **Remove size props from components**: Set `data-size` on container elements instead
3. **Update typography mixins**: `body` → `paragraph-medium`, `small` → `text-small`
4. **Beta components are now stable**: Remove `BETA_` prefix from `Search`, `TableOfContents`

## Resources

- **Documentation**: https://jokul.fremtind.no
- **Storybook**: https://jokul.fremtind.no/storybook
- **GitHub**: https://github.com/fremtind/jokul
- **Support**: Contact the Jøkul team on Teams or create a GitHub issue