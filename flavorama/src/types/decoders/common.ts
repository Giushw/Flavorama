import {Iterable} from "../commons";

// Single entity for cuisines | difficulties | diets
interface Type {
  name: string
};

// List of entities for cuisines | difficulties | diets
export type TypesList = Iterable<Type>;