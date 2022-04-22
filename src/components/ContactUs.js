import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in : <a href='https://www.linkedin.com/in/ramez-hamdi-788026215/'>{resumeData.linkedinId}</a>
                </h4>
                <h4>CV : <a href='https://app.rezi.ai/s/0BDaoqjF9KJknORvA8ds'>Ramez-Hamdi-Saeed-CV</a></h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}