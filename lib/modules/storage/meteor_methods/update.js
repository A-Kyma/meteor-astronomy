import classUpdate from '../utils/class_update.js';
import { check, Match } from 'meteor/check';
import { EJSON } from 'meteor/ejson'

async function update(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return await classUpdate(args);
};

export default update;