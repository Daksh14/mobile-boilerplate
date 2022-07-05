/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeWateIntakeMutationVariables = {
    input: number;
};
export type HomeWateIntakeMutationResponse = {
    readonly addWaterIntake: boolean;
};
export type HomeWateIntakeMutation = {
    readonly response: HomeWateIntakeMutationResponse;
    readonly variables: HomeWateIntakeMutationVariables;
};



/*
mutation HomeWateIntakeMutation(
  $input: Int!
) {
  addWaterIntake(waterDrank: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "waterDrank",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "addWaterIntake",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeWateIntakeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeWateIntakeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5ed3ea506b76e06b41bf0ca1aa2bda71",
    "id": null,
    "metadata": {},
    "name": "HomeWateIntakeMutation",
    "operationKind": "mutation",
    "text": "mutation HomeWateIntakeMutation(\n  $input: Int!\n) {\n  addWaterIntake(waterDrank: $input)\n}\n"
  }
};
})();
(node as any).hash = 'f05dd1a86e2ff106448abf2acf7ddfab';
export default node;
