import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import I18n from 'react-cf-helper-i18n';
import countries from '../../data/countries';
import currencies from '../../data/currencies';
import store from '../../store';

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      tenant: false,
      country: false,
      currency: false,
    };

    store.subscribe(() => {
      const { form } = store.getState();
      this.setState({
        name: form.errors.company.name,
        tenant: form.errors.company.tenant,
        country: form.errors.company.country,
        currency: form.errors.company.currency,
      });
    });
  }

  render() {
    const {
      name,
      tenant,
      country,
      currency,
    } = this.state;
    const { setValue } = this.props;
    return (
      <Form>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.company.form.name')}
            placeholder={I18n.t('account.create.company.form.name')}
            onChange={event => setValue(event.target.value, 'name')}
            error={name}
            fluid
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.company.form.tenant')}
            placeholder={I18n.t('account.create.company.form.tenant')}
            onChange={event => setValue(event.target.value, 'tenant')}
            error={tenant}
            fluid
          />
        </Form.Field>
        <Form.Field required>
          <Form.Dropdown
            onChange={(_, data) => setValue(data.value, 'country')}
            label={I18n.t('account.create.company.form.country')}
            placeholder={I18n.t('account.create.company.form.country')}
            fluid
            search
            selection
            options={countries}
            error={country}
          />
        </Form.Field>
        <Form.Field required>
          <Form.Dropdown
            onChange={(_, data) => setValue(data.value, 'currency')}
            label={I18n.t('account.create.company.form.currency')}
            placeholder={I18n.t('account.create.company.form.currency')}
            fluid
            search
            selection
            options={currencies}
            error={currency}
          />
        </Form.Field>
      </Form>
    );
  }
}

Company.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Company;
