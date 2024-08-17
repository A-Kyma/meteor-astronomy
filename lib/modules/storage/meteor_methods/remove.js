import classRemove from '../utils/class_remove.js';
import { check, Match } from 'meteor/check';
import { EJSON } from 'meteor/ejson'

async function remove(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return await classRemove(args);
};

export default remove;