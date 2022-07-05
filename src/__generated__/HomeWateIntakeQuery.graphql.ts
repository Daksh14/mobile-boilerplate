/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeWateIntakeQueryVariables = {};
export type HomeWateIntakeQueryResponse = {
    readonly waterIntake: number;
};
export type HomeWateIntakeQuery = {
    readonly response: HomeWateIntakeQueryResponse;
    readonly variables: HomeWateIntakeQueryVariables;
};



/*
query HomeWateIntakeQuery {
  waterIntake
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "waterIntake",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeWateIntakeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeWateIntakeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6cde2186a99ae0b851d747595628a067",
    "id": null,
    "metadata": {},
    "name": "HomeWateIntakeQuery",
    "operationKind": "query",
    "text": "query HomeWateIntakeQuery {\n  waterIntake\n}\n"
  }
};
})();
(node as any).hash = '774de74faa168aa59d6ac02afa62abeb';
export default node;
