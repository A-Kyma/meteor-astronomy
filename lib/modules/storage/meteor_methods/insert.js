import classInsert from '../utils/class_insert.js';
import { check, Match } from 'meteor/check';
import { EJSON } from 'meteor/ejson'

async function insert(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return await classInsert(args);
};

export default insert;