import Client, { Cookies, Graphql } from 'react-cf-graphql-client';

const request = function request(form) {
  return Client.mutate({
    mutation: Graphql`
      mutation AccountRegister {
        accountRegister(input: {
          company: {
            name: "${form.inputs.company.name}",
            masterDataCountryId: ${form.inputs.company.country},
            masterDataCurrencyId: ${form.inputs.company.currency},
            timeZone: "${form.inputs.company.timeZone}",
            locale: "${Cookies.get('cf-locale')}",
          },
          user: {
            name: "${form.inputs.user.name}",
            email: "${form.inputs.user.email}",
            password: "${form.inputs.user.password}"
          }
        }) {
          tenant
        }
      }
    `,
  });
};

export default request;
