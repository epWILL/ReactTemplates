/**
 * This script is derived from the Create React App project.
 * Source: https://github.com/facebook/create-react-app
 *
 * Please refer to the original source for detailed documentation and updates.
 */

"use strict";
const { createHash } = require("crypto");

module.exports = (env) => {
  const hash = createHash("md5");
  hash.update(JSON.stringify(env));

  return hash.digest("hex");
};
