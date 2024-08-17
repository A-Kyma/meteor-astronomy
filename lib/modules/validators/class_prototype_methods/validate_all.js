import _extend from 'lodash/extend';

async function validateAll(options = {}, callback) {
  let doc = this;
  let Class = doc.constructor;

  // If the first argument is callback function then reassign values.
  if (arguments.length === 1 && Match.test(options, Function)) {
    callback = options;
    options = {};
  }

  _extend(options, {
    fields: Class.getValidationOrder(),
    stopOnFirstError: false
  });

  await doc.validate(options, callback);
};

export default validateAll;