import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import I18n from 'react-cf-helper-i18n';
import store from '../../store';

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      password: false,
    };

    store.subscribe(() => {
      const { form } = store.getState();
      this.setState({
        name: form.errors.user.name,
        email: form.errors.user.email,
        password: form.errors.user.password,
      });
    });
  }

  render() {
    const {
      name,
      email,
      password,
    } = this.state;
    const { setValue } = this.props;
    return (
      <Form>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.user.form.name')}
            placeholder={I18n.t('account.create.user.form.name')}
            onChange={event => setValue(event.target.value, 'name')}
            error={name}
            fluid
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.user.form.email')}
            placeholder={I18n.t('account.create.user.form.email')}
            onChange={event => setValue(event.target.value, 'email')}
            error={email}
            fluid
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label={I18n.t('account.create.user.form.password')}
            placeholder={I18n.t('account.create.user.form.password')}
            onChange={event => setValue(event.target.value, 'password')}
            error={password}
            type="password"
            fluid
          />
        </Form.Field>
      </Form>
    );
  }
}

User.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default User;
