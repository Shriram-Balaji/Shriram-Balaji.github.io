import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import NetAppLogo from '../../assets/images/experience/netapp-logo.svg'
import CiscoLogo from '../../assets/images/experience/cisco-logo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="💼&nbsp;&nbsp;Experience">
        <div className="row">
          <ExperienceUnit
            logo={NetAppLogo}
            colour='#fff'
            title='NetApp'
            link='https://www.netapp.com/'
            timeperiod='2018 - Present'
            subtitle='Building state-of-the-art tools for the enhanced developer productivity.'
          />
          <ExperienceUnit
            logo={CiscoLogo}
            colour='#FFFFFF'
            title='Cisco'
            link='https://www.cisco.com/'
            timeperiod='2017 - 2018'
            subtitle='Built scalable node.js micro-service architectures as part of the Engineering Team in Team-
            One, a cloud-based messaging and collaboration tool.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
