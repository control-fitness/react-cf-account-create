import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import I18n from 'react-cf-helper-i18n';
import countries from 'react-cf-data-countries';
import currencies from 'react-cf-data-currencies';
import timeZones from 'react-cf-data-timezones';
import store from '../../store';

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      country: false,
      currency: false,
    };

    store.subscribe(() => {
      const { form } = store.getState();
      this.setState({
        name: form.errors.company.name,
        country: form.errors.company.country,
        currency: form.errors.company.currency,
        timeZone: form.errors.company.timeZone,
      });
    });
  }

  render() {
    const {
      name,
      country,
      currency,
      timeZone,
    } = this.state;
    const { setValue } = this.props;
    return (
      <Form>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.company.form.name')}
            placeholder={I18n.t('account.create.company.form.name')}
            onChange={event => setValue(event.target.value, 'name')}
            autoFocus="autofocus"
            error={name}
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
        <Form.Field required>
          <Form.Dropdown
            onChange={(_, data) => setValue(data.value, 'timeZone')}
            label={I18n.t('account.create.company.form.timeZone')}
            placeholder={I18n.t('account.create.company.form.timeZone')}
            fluid
            search
            selection
            options={timeZones}
            error={timeZone}
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
