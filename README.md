# React Mastery Project - <span style="color:#FA7C16">_COOK RECIPES_</span>

The project is a React-based application that requires collaboration from a team of developers. It involves the following elements:

### Technical element :

- **_GitHub Repository_** : Set up a GitHub repository to host the project. This will serve as the central location for collaboration, code versioning, and issue tracking.

- **_Continuous Deployment_** : Implement a continuous deployment process to ensure that the application is always up to date and accessible. You can use platforms such as Netlify, Vercel, or GitHub Actions to automate the deployment process whenever changes are pushed to the main branch.

- **_Testing_** : Implement a comprehensive testing strategy to ensure the reliability and stability of the application. Utilize frameworks like Jest and React Testing Library to write unit tests and integration tests. Cover critical functionality and edge cases with test cases. Consider using tools like Cypress for end-to-end testing.

- **_Always Up_** : Implement measures to ensure the application is always up and running, with minimal downtime. Utilize monitoring tools, error tracking, and automated alerts to quickly identify and resolve any issues that may arise.

### Technical Stack :

The project utilizes the following technologies and concepts:

- **_React Hooks_** : Manage state and lifecycle within functional components. This enables a more modular and reusable code structure.

- **_Context API_** : Manage global state and make data accessible to different components without the need for prop drilling.

- **_Component Library_** : Leverage a component library, to streamline the UI development process and ensure consistency across the application.

- **_Authentication_** : Implement authentication functionality using a suitable authentication library or framework.

- **_API Integration_**: Integrate with external APIs to fetch and update data.

## <span style="color:#FA7C16">What we use</span> :

- **_Component Library_** : [Shadcn-ui](https://ui.shadcn.com) is not consideed like a library component but it allow to build your own.
  They use [Tailwind-ccs](https://tailwindcss.com), [React Hook Form](https://react-hook-form.com) and on [Radix UI](https://www.radix-ui.com), [Lucide React](https://lucide.dev/guide/packages/lucide-react) build-in to create there components.

- **_Authentication and database_** : [Supabase](https://supabase.com) is your choice, it's allows us to do all we need in purpose for this project.

- **_API Integration_**: [mealdb](https://www.themealdb.com/api.php) because it's about food and recipes.

- **_Testing_** : [Vitest](https://vitest.dev), [Testing-library](https://testing-library.com), [Cypress](https://docs.cypress.io/guides/overview/why-cypress), [msw](https://mswjs.io), [faker](https://fakerjs.dev). All what we need for testing.

- **React** : [React Router](https://reactrouter.com/en/main), [React Query](https://tanstack.com/query/v3/) for routing and manage data.

- <span style="color:#FF0000">**Not include in requirement**</span> :

  - [Typescript](https://www.typescriptlang.org) and [Zod](https://zod.dev) to get a safer application.
  - [Eslint](https://eslint.org) / [Prettier](https://prettier.io) with [Husky](https://typicode.github.io/husky/) to handle rules/ formatter/ pre-commit for better continuous integration pipeline.

## How to install this application

### Preparation project

- **_Pnpm_** : It's faster than regular npm. You need to do some step explain [here](https://pnpm.io/installation).
- **_Supabase_** : Create a account a follow step by step guidance (in progress).
- **_Gmail_** : An gmail account to disable supabase limitation for email validation.
- **_.env_** : Don't forgot to filled up each variables!

### Scripts

- **_Launch App_** : `pnpm dev`
- **_Build App_** : `pnpm build`
- **_Tests_** :
  - unit/integration:
    - `pnpm test` (classic)
    - `pnpm test:coverage` (with coverage)
  - End to End:
    - `pnpm e2e:run` (without browser)
    - `pnpm e2e:open` (with browser)
