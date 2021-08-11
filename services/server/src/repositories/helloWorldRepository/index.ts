import { Repository } from "src/types/repositories";

function getGreetings(): string {
  return "Hello world!";
}

const helloWorldStore = {
  getGreetings
};

function init(/* It should receive a model object if exists */): Repository<
  string | void
> {
  return {
    ...helloWorldStore,
    getSchemas: () => {}
  };
}

export default { init };
