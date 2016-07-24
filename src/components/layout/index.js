import React from 'react';
import blacklist from 'blacklist';

export default function Layout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel='stylesheet' href='/stylesheets/main.css' />
      </head>
      <body>
        <div id="application-container" data-json={JSON.stringify(blacklist(props, 'children'))}>
          {props.children}
        </div>
        <script src="/javascripts/main.js"></script>
      </body>
    </html>
  );
}
