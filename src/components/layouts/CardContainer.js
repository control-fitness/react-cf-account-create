import React from 'react';
import {
  Card,
  Container,
  Image,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import { Caption } from '../../styles';
import Company from '../../containers/Company';
import User from '../../containers/User';
import Footer from '../../containers/Footer';

const CardContainer = function CardContainer() {
  return (
    <Card fluid>
      <Card.Content>
        <Container textAlign="center">
          <Image
            src={Cdn.image('logo-300-300.svg')}
            width={96}
            height={96}
            centered
          />
        </Container>
      </Card.Content>
      <Container>
        <Caption>
          { I18n.t('account.create.company.header') }
        </Caption>
      </Container>
      <Card.Content>
        <Company />
      </Card.Content>
      <Container>
        <Caption>
          { I18n.t('account.create.user.header') }
        </Caption>
      </Container>
      <Card.Content>
        <User />
      </Card.Content>
      <Card.Content>
        <Footer />
      </Card.Content>
    </Card>
  );
};

export default CardContainer;
