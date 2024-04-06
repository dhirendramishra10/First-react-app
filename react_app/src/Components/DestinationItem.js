import React from 'react';

export default class DestinationItem extends React.Component {
  render() {
    return (
        <div>
         <h2>{this.props.attributes.title}</h2>
         <h2>{this.props.attributes.field_date}</h2>
         <h2>{this.props.attributes.field_pics}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />
        <div dangerouslySetInnerHTML={{__html: this.props.attributes.field_pics}} />
      </div>
    );
  }
}