**Progressive enhancement**
- Build with HTML and CSS first, add vanilla JavaScript only when needed for interactivity beyond CSS capabilities (e.g., form validation, dynamic content loading, complex state management)

**HTML**
- Use semantic HTML elements (`<article>`, `<nav>`, `<section>`, `<header>`, etc.) for better accessibility and structure
- Accessibility: Include ARIA labels where semantic HTML alone isn't sufficient, ensure keyboard navigation works, maintain proper heading hierarchy

**CSS**
- Write the minimum viable CSS by letting HTML structure, the cascade, and intrinsic sizing do the heavy lifting. Style the exceptions, not the rules
- Embrace the cascade: Style at the highest level possible. Global styles should make pages look great before any component CSS loads. This minimizes CSS and leverages the browser's natural behavior
- Flexible units: Prefer `ch` (for measure/line-length), `rem` (for spacing), `%` and viewport units over pixels
- Fluid typography and spacing: Use `clamp()` for scales that adapt smoothly:
- Leverage modern CSS features including:
	- CSS Variables (custom properties) for maintainable and editable styling
	- Container queries for component-responsive design
	- Flexbox and Grid for layouts
	- Subgrid for nested grid alignment
	- Modern pseudo-classes (`:has()`, `:is()`, `:where()`)
- Performance considerations:
	- Minimize layout thrashing (avoid reading then writing to DOM in loops)
	- Use `content-visibility` for off-screen content
	- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Mobile-First methodology:
	- Write base styles for small screens first
	- Enhance with `min-width` media queries only when necessary
	- Let intrinsic design eliminate most breakpoints

**JavaScript**
- JavaScript as an enhancement layer: HTML and CSS must be functional without Javascript. Assume scripts might fail to load or load partially
- Vanilla first: Avoid dependencies and frameworks, instead use native browser APIs and modern JavaScript features
- Write lightweight code that loads and runs fast. Avoid unnecessary DOM manipulation and prefer event delegation
- Code should be easy to understand and modify
- Prefer explicit `if/else` statements over ternaries or clever one-liners when it improves readability
- Structure for Editability: Place all configurable values at the top in a clearly marked section with:
	- Descriptive variable names
	- Inline comments explaining what each value controls and typical ranges
	- Sensible defaults
	- Grouped by functionality