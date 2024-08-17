import classUpsert from '../utils/class_upsert.js';
import { check, Match } from 'meteor/check';
import { EJSON } from 'meteor/ejson'

async function upsert(args) {
  check(args, Match.Any);
  args = EJSON.fromJSONValue(args)

  return await classUpsert(args);
};

export default upsert;