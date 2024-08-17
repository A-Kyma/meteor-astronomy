import _tail from 'lodash/tail';

async function validate(rawDoc) {
  const Class = this;
  const doc = new Class(rawDoc);
  const args = _tail(arguments);
  return await doc.validate.apply(doc, args);
};

export default validate;