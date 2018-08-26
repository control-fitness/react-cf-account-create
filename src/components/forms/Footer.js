import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import I18n from 'react-cf-helper-i18n';
import { Button, Form } from 'semantic-ui-react';
import store from '../../store';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      accept: false,
      form: store.getState().form,
      sent: false,
    };

    store.subscribe(() => {
      this.setState({
        accept: store.getState().form.errors.terms.accept,
        form: store.getState().form,
        sent: store.getState().form.inputs.button.submit,
      });
    });
  }

  render() {
    const { accept, form, sent } = this.state;
    const { setValue, submit } = this.props;
    return (
      <Form>
        <Form.Checkbox
          onChange={(_, data) => setValue(data.checked, 'accept')}
          label={I18n.t('account.create.terms.label')}
          error={accept}
        />
        <Button
          loading={sent}
          disabled={sent}
          onClick={() => { submit(form); }}
          primary
          floated="right"
        >
          {I18n.t('form.buttons.save')}
        </Button>
      </Form>
    );
  }
}

Footer.propTypes = {
  submit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Footer;