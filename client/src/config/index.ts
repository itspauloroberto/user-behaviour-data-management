import developmentEnv from './envs/development';
import productionEnv from './envs/production';

const ENV = process.env.NODE_ENV || 'development';

interface Config {
  REACT_APP_API: ApiConfig;
}

interface ApiConfig {
  url: string;
}

interface ENV_TYPES {
  dev: Config;
  prod: Config;
}

const ENVS = {
  dev: developmentEnv,
  prod: productionEnv,
};

function getEnvVar(env: string, key: keyof Config): any {
  const { dev, prod }: ENV_TYPES = ENVS;

  if (env === "production") {
    return prod[key];
  }

  return dev[key];
}

const REACT_APP_API = getEnvVar(ENV, 'REACT_APP_API');

export default REACT_APP_API;
