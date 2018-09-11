/* globals window */
import React, { PureComponent } from 'react';
import {
  Grid,
  Container,
  Image,
} from 'semantic-ui-react';
import { Provider } from 'react-redux';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import { Cookies } from 'react-cf-graphql-client';
import is from 'is_js';
import CardContainer from '../layouts/CardContainer';
import { Body } from '../../styles';
import store from '../../store';

class AccountCreate extends PureComponent {
  componentDidMount() {
    const tenant = Cookies.get('cf-tenant');
    const token = Cookies.get('cf-token');

    // check if session exists
    if (!is.undefined(token)) {
      // redirect to home
      window.location = '/';
    } else if (!is.undefined(tenant)) {
      // remove cf-tenant cookie
      Cookies.remove('cf-tenant');

      // reload page
      window.location.reload();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Body>
          <Grid centered columns={1}>
            <Grid.Column
              computer="six"
              widescreen="six"
              tablet="ten"
              mobile="sixteen"
              largeScreen="six"
            >
              <Container textAlign="center">
                <h1>
                  {I18n.t('account.create.header')}
                </h1>
                <Image
                  src={Cdn.image('logo-text-296-40.svg')}
                  width={296}
                  height={40}
                  centered
                />
              </Container>
              <CardContainer />
            </Grid.Column>
          </Grid>
        </Body>
      </Provider>
    );
  }
};

export default AccountCreate;
