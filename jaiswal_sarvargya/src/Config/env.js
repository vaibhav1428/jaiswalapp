
const devEnvironmentVariables = {
  BACKEND_URL: encodeURI("https://niylo.com/jaiswalapp/WebService"),
};

const prodEnvironmentVariables = {
  BACKEND_URL: "https://niylo.com/",
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
