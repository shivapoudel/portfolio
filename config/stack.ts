import { Colors } from './colors';

export enum Stack {
  // Languages
  php,
  typescript,
  javascript,

  // Frontend
  react,
  nextjs,

  // WordPress
  wordpress,
  woocommerce,

  // Backend
  node,
  graphql,

  // Cloud
  aws,

  // Tools, Libs
  webpack,
  babel,
  redux,

  // Databases
  mysql,
  redis,

  // Tools
  docker,
  terraform,
}

export const WorkStack = [
  Stack.php,
  Stack.mysql,
  Stack.wordpress,
  Stack.woocommerce,
  Stack.javascript,
  Stack.typescript,
  Stack.react,
  Stack.redux,
  Stack.nextjs,
  Stack.aws,
  Stack.docker,
  Stack.terraform,
  Stack.graphql,
  Stack.redis,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.php]: {
    value: 'PHP',
    color: Colors.php,
  },
  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.wordpress]: {
    value: 'WordPress',
    color: Colors.wordpress,
  },
  [Stack.woocommerce]: {
    value: 'WooCommerce',
    color: Colors.woocommerce,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.webpack]: {
    value: 'Webpack',
    color: Colors.webpack,
  },
  [Stack.babel]: {
    value: 'Babel',
    color: Colors.babel,
  },
  [Stack.redux]: {
    value: 'Redux',
    color: Colors.redux,
  },
};
