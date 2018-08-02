/**
 * Default state
 */

module.exports = {
  errors: {
    company: {
      name: false,
      tenant: false,
      country: false,
      currency: false,
    },
    user: {
      name: false,
      email: false,
      password: false,
    },
    terms: {
      accept: false,
    },
  },
  inputs: {
    company: {
      name: '',
      tenant: '',
      country: '',
      currency: '',
    },
    user: {
      name: '',
      email: '',
      password: '',
    },
    terms: {
      accept: false,
    },
  },
};
