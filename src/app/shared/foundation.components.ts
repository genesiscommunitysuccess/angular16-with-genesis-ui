/**
 * Foundation Design System
 *
 * Import what you plan on using, including the provider registration hook.
 */
import { foundationButton, foundationTextField, provideDesignSystem, foundationDesignSystemProvider } from '@genesislcap/foundation-ui';

/**
 * Register the components the app is using with the system.
 */
provideDesignSystem().register(
  /**
   * Design system provider element used to declaratively apply zero config to every dom node in the host tree.
   */
  foundationDesignSystemProvider(),
  /**
   * Common across most routes, so batch register these lightweight components upfront.
   * Each call can take an overrideDefinition object to tailor the components even further.
   */
  foundationButton(),
  foundationTextField(),
);
