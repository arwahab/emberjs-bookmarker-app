import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  link: attr('string'),
  title: attr('string'),
  about: attr('string'),
  public: attr('boolean'),
  created: attr('date', {
    defaultValue() { return new Date(); }
  }),
  user: belongsTo('user')
});
