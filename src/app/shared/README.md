# Shared Resources

This serves as an example of how we might organise *shared* resources that will be used across many sections of the application.
These might be third-party web components, or Angular components we have developed as part of our application.

## Design Systems and Design Tokens

Genesis Web Components are designed to be re-used across various Design Systems. These systems use Design Tokens, which are one of the data points used to customise our Web Component presentation and behaviour.
As such, Genesis Web Components need to be registered with the intended Design System post import.

Please see [zero.components.ts](./zero.components.ts) and [foundation.components.ts](./foundation.components.ts) for examples of such registration.
