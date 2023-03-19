import { Component } from 'react';

export class ContactsList extends Component {
  render() {
    const { children } = this.props;
    return <ul>{children}</ul>;
  }
}
