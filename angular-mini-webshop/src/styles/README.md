# Styles Architecture

Professional SCSS architecture following ITCSS (Inverted Triangle CSS) and SMACSS principles for scalable enterprise applications.

## Directory Structure

```
styles/
├── abstracts/           # Settings, variables, mixins, tokens
│   ├── _variables.scss  # SCSS variables and base values
│   ├── _tokens.scss     # CSS custom properties for runtime theming
│   ├── _mixins.scss     # Reusable mixins and functions
│   └── _index.scss      # Barrel export for all abstracts
├── base/                # Reset, typography, base element styles
│   └── _reset.scss      # Modern CSS reset with accessibility
├── layout/              # Layout-related styles (grid, container)
│   └── _container.scss  # Container system with variants
├── components/          # Global component styles only
│   ├── _buttons.scss    # Button component styles
│   └── _material-icons.scss # Icon system
├── utilities/           # Utility classes (last in cascade)
│   └── _index.scss      # Common utility classes
├── main.scss           # Main entry point
└── README.md           # This file
```

## Design Principles

### 1. Modern CSS Architecture (2025)
- **CSS Custom Properties**: Runtime theming support
- **Logical Properties**: `margin-inline`, `padding-inline` for internationalization
- **Modern Module System**: `@use` and `@forward` instead of `@import`
- **Progressive Enhancement**: Fallbacks for older browsers

### 2. Professional Naming Conventions
- **BEM Methodology**: `.component`, `.component--modifier`, `.component__element`
- **Semantic Colors**: `$color-text-primary` instead of `$color-black`
- **Consistent Prefixes**: `$breakpoint-*`, `$space-*`, `$color-*`

### 3. Scalable Design System
- **Design Tokens**: CSS custom properties for consistency
- **Spacing Scale**: Mathematical progression (0.25rem increments)
- **Typography Scale**: Semantic font sizes with fallbacks
- **Z-index Management**: Centralized z-index scale

## Usage Guidelines

### Component Styles
Component-specific styles should use Angular's encapsulated styles:

```scss
// product-card.component.scss
@use 'styles/abstracts' as *;

.product-card {
  padding: var(--space-4);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-base);

  @include lg {
    padding: var(--space-6);
  }
}
```

### Responsive Design
Use mobile-first breakpoint mixins:

```scss
// Mobile-first approach
.component {
  padding: $space-4;

  @include md {
    padding: $space-6;
  }

  @include lg {
    padding: $space-8;
  }
}
```

### Design Tokens
Prefer CSS custom properties for themeable values:

```scss
// Good - Runtime themeable
background-color: var(--color-background-primary);

// Also good - With SCSS fallback
color: var(--color-text-primary, #{$color-text-primary});
```

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **CSS Custom Properties**: Full support
- **Logical Properties**: Full support
- **Container Queries**: Ready for implementation

## Performance Considerations

- **Critical CSS**: Global styles are minimal
- **Component Encapsulation**: Angular ViewEncapsulation prevents style conflicts
- **Build Optimization**: SCSS compiled and optimized during build
- **Tree Shaking**: Unused styles eliminated in production builds

## Future Considerations

- **Dark Mode**: Foundation ready with CSS custom properties
- **Container Queries**: Architecture supports easy implementation
- **CSS-in-JS Migration**: Design tokens provide smooth migration path