# Microfrontends Demo with React

## Motivation

Microservices are very popular these days, and for a good reason. However, regardless of how accurate an architecture might be, **frontend** always poses a problem. Imagine you have a small digital store, and you designed your microservices for two main _features_: product catalog and cart. You can follow the pattern, and different microservices to implement them, but you will eventually end up putting them together in the frontend.

If you design it _the usual way_, you will likely design one single _web app_, with your framework or library of choice, and use the services you build. Doing so, however, actually turn your _web app_ into one giant monolithic monster. More importantly, you will **never** be able to _compose_ your frontend the way you can do with _backend microservices_.

## Solution

One way (**alternatives exist**, check the [References](#references-and-other-projects)) to address this situation is leveraging the usual _third-party component integration_, i.e. splitting your frontend into several, distinct side projects, each implementing one set of features, and matching the microservices design.

For instance, in our examples, we should build one _library_ for the product catalog and another one for cart. Each will contain UI components, services, etc... **bundled together**. Then, the actual _web app_ will **only reference each library**, typically via the _router_.

As you probably guessed from the title, this demo is done in React, but you can replicate it in Angular as well (I was actually willing to do that, but I stumbed upon a strange issues and had to opt for React).

## Advantages and limitations

### Advantages

- **Composition** is straightforward: just reference each _microfrontend_ library the way you usually work with third-party packages.
- **Versioning** can be achieved using _web app_ `package.json` and _semVer_.
- **A/B testing**: thanks to the previous point, making two building composing different versions of microfrontends is trivial. At that point, we can publish them and apply A/B testing easily.
    - This implies some compatibility among the different versions you pick, of course.
- **Testability** is somewhat simplified, since each library can be developed and tested independently. Additionally, it is possibile to leverage small _demo_ projects to test them end-to-end as well.

### Limitations

This is a basic demo, and not a complete solution to tackle any situation or requirement.

- **Multiple Frameworks**: so far, it is NOT possibile to mix different frameworks or libraries. The example is done with React, and can be rebuilt with Angular as well, but mixing them is hard.
- **Development and release** is surely a bit harder, since managing several projects at once can be challenging at first. You need to build a library each time you make changes, and then restart `create-react-app`. Releasing also involves a bit of additionaly work, as you need to publish the libraries (typically, on a npm server, possibly private if can't make them public) and then build the _web app_ itself.

## Usage

```bash
git clone https://github.com/unsafecode/react-microfrontends-demo.git

cd cart
npm install
npm run build
npm link

cd ../catalog
npm install
npm run build
npm link

cd ../web
npm install
npm link @unsafecode/react-microfrontends-cart @unsafecode/react-microfrontends-catalog
npm start
```

## Technical details

- `web` was build with [create-react-app](https://github.com/facebookincubator/create-react-app) and [react-router](https://reacttraining.com/react-router/), with the addition of [react-async-component](https://github.com/ctrlplusb/react-async-component) to enable lazy-loading.
- `cart` and `catalog` are based on [nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#libraries)

## References and other projects

- Building Microfrontends series by Rogério Chaves (@rogeriochaves):
    - [Part 1 - Creating Small Apps](https://medium.com/@_rchaves_/building-microfrontends-part-i-creating-small-apps-710d709b48b7)
    - [Part 2 - Joining Apps Together](https://medium.com/@_rchaves_/building-microfrontends-part-ii-joining-apps-together-dfa1b6f17d3e)
    - [Part 3 - Public Path Problem and Routing](https://medium.com/@_rchaves_/building-microfrontends-part-iii-public-path-problem-1ce823be24c9=)
    - [Part 4 - Using CDNs + Tech Radar for consensus](https://medium.com/@_rchaves_/building-microfrontends-part-iv-using-cdns-tech-radar-for-consensus-7dd658c1edb7)
    - [Part 5 - Communication Between Apps](https://medium.com/@_rchaves_/building-microfrontends-part-v-communication-between-apps-34ae3649d610)