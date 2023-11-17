# Angular 16 with Genesis Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10. 

Sample steps followed:

```shell
npm install -g @angular/cli@v16-lts
ng new angular16-with-genesis-ui
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
...
cd angular16-with-genesis-ui
ng generate component dashboard
ng generate component not-found
ng generate module auth
```

In addition, moved project onto a custom webpack builder and added `"skipLibCheck": true` to tsconfig.json.

**Please see the initial commits where these steps were broken down for clarity.**

### Adding Web Component Support

On-top of the cli generated baseline, we've configured this angular project to work with browser native [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components),
a.k.a Custom Elements, which are completely web framework independent. Angular has full support for Web Components, which you can verify on the [Angular + Custom Elements Test Results](https://custom-elements-everywhere.com/libraries/angular/results/results.html), running on https://custom-elements-everywhere.com/.

To get angular to recognise Web Components, we simply add the [CUSTOM_ELEMENTS_SCHEMA](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) to the project where we need this support.

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Component } from '@angular/core';
...
@NgModule({ // < or `Component`
  ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
```

Then it's just a matter of adding any Web Components you wish to use to the project's dependency graph, via a `<script>` tag, npm install, or whatever other means you prefer.

Here we're adding a Web Component from the community via a script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/ionicons@7.2.1/dist/ionicons.js"></script>
```

And then adding the element markup to your templates:

```html
<ion-icon name="rocket"></ion-icon>
```

That's it! No framework plumbing code required beyond perhaps binding values to these web components via their attributes, or handling their emitted events if required. Given you'll probably want to do that, you need to add the Angular `FormsModule`.

```ts
...
import { FormsModule } from '@angular/forms';
...
@NgModule({ // < or `Component`
  ...
  imports: [
    ...
    FormsModule  // < enable bindings etc. on our web components
  ],
})
```

With the above in place, our Web Components are now first class citizens. There's some Web Component binding examples at the bottom of the dashboard page.

We've added the same script tag integration to this project's [index.html](./src/index.html) file, and used icon Web Component in the [dashboard.component.html](./src/app/dashboard/dashboard.component.html) template. Look out for the rocket icon on the dashboard.
While using the script tag approach is fine in many cases, some third-party imports may required post import setup. Where you do that setup is really up to you. If it's a component that you only want to use in one place, then perhaps import and add the setup in that area.
If it's for components or design systems you plan do use across the entire application, you may wish to centralise that in a shared location. For the latter, we've created such a shared area in [src/app/shared/](./src/app/shared/README.md).

#### Are Web Components a thing yet?

[Yes!](https://arewebcomponentsathingyet.com)

#### Where can I find Web Components?

We provide a lot of pre-built and extensible Web Components at Genesis. From simple primitives, like buttons, switches, and even icon components like the above, to fully connected composites and micro frontends built to work with the Genesis backend.
This project's [auth module](./src/app/auth/auth.module.ts) uses the pre-build `@genesislcap/foundation-auth` micro frontend to offload all user authentication, mfa, and self-service password recovery complexity to Genesis.
Learn about these on https://learn.genesis.global/docs/web/web-components/overview/.

Beyond that, check out https://www.webcomponents.org/, where you can browse single elements and collections from well known companies such as [Adobe](https://www.webcomponents.org/author/adobe), [Github](https://www.webcomponents.org/author/github), and [Google](https://www.webcomponents.org/author/GoogleWebComponents).
The [component.gallery](https://component.gallery/design-systems/?tech=Web+Components) and [Open UI](https://open-ui.org/) websites are also good starting points.

#### How do I build a Web Component?

Angular developers who are interested in creating native Web Components should check out the [Angular Elements](https://angular.io/guide/elements) package. Also, see the [All the Ways to make a Web Component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/board/) board.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
