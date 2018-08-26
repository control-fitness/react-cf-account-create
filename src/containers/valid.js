/**
 * Validate inputs on all forms based state
 * @param {Object} form
 */
import is from 'is_js';
import I18n from 'react-cf-helper-i18n';
import {
  termsErrors,
  companyErrors,
  userErrors,
} from '../actions';

const valid = function valid(form, dispatch) {
  let invalid = false;
  const properties = [
    {
      action: companyErrors,
      error: is.empty(form.inputs.company.name),
      name: 'name',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: companyErrors,
      error: is.empty(form.inputs.company.country),
      name: 'country',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: companyErrors,
      error: is.empty(form.inputs.company.currency),
      name: 'currency',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: companyErrors,
      error: is.empty(form.inputs.company.timeZone),
      name: 'timeZone',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: userErrors,
      error: is.empty(form.inputs.user.name),
      name: 'name',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: userErrors,
      error: is.empty(form.inputs.user.email),
      name: 'email',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: userErrors,
      error: is.not.email(form.inputs.user.email),
      name: 'email',
      message: I18n.t('validates.errors.messages.invalid'),
    },
    {
      action: userErrors,
      error: is.empty(form.inputs.user.password),
      name: 'password',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: userErrors,
      error: form.inputs.user.password.length < 6,
      name: 'password',
      message: I18n.t('validates.errors.messages.blank'),
    },
    {
      action: termsErrors,
      error: is.not.truthy(form.inputs.terms.accept),
      name: 'accept',
      message: I18n.t('validates.errors.messages.accepted'),
    },
  ];

  properties.forEach((property) => {
    if (property.error) {
      invalid = property.error;
    }
  });

  if (invalid) {
    properties.forEach((property) => {
      dispatch(property.action(property.error, property.name));
    });
  }

  return !invalid;
};

export default valid;
