import _has from 'lodash/has';
import _each from 'lodash/each';
import _includes from 'lodash/includes';
// import deprecated from '../../core/utils/deprecated';
import throwParseError from '../../core/utils/throw_parse_error.js';
import reservedKeywords from '../../../core/reserved_keywords.js';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/akyma:astronomy';


function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence and validity of the "relations" property.
  if (definition.relations !== undefined) {
    if (!Match.test(definition.relations, Object)) {
      throwParseError([{
          'class': className
        }, {
          'property': 'relations'
        },
        'Relations definition has to be an object'
      ]);
    }

    _each(definition.relations, (relation, relationName) => {
      if (!Match.test(relation, Object)) {
        throwParseError([{
            'class': className
          }, {
            'relation': relationName
          },
          'Relation has to be an object'
        ]);
      }
	  
      const pattern = { 
        type: String, 
        local: String, 
        foreign: String, 
        class: Match.OneOf(String, Mongo.Collection, Class),
        options: Match.Optional(Object),
      };
      if (!Match.test(relation, pattern)) {
        throwParseError([{
            'class': className
          }, {
            'relation': relationName
          },
          'Relation doesn\'t follow the pattern'
        ]);
      }

      if (_includes(reservedKeywords, relationName)) {
        throwParseError([{
            'class': className
          }, {
            'relation': relationName
          },
          'Reserved keyword'
        ]);
      }
      parsedDefinition.relations[relationName] = relation;
    });
  }
};

export default onParseDefinition;