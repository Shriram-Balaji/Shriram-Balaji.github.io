import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import afternotesLogo from '../../assets/images/projects/afternotes-logo.png'
import domainHuntLogo from '../../assets/images/projects/domain-hunt-logo.svg'
import semverCalcLogo from '../../assets/images/projects/semver-calc-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="✨&nbsp;&nbsp;Projects">
        <div className="row">
          <ExperienceUnit
            logo={afternotesLogo}
            colour="#FFFFFF"
            title="Afternotes"
            link="https://play.google.com/store/apps/details?id=com.centauri.thinkstr.afternotes"
            timeperiod="2017 - ???"
            subtitle="A platform that helps Engineering students in India study better by curating resources from the web."
          />
          <ExperienceUnit
            logo={domainHuntLogo}
            colour="#FFF"
            title="Domain Hunt"
            link="https://www.npmjs.com/package/cli-domain-hunt"
            timeperiod="2018"
            subtitle="A command line interface to easily search, suggest and compare domains. Built using Node.js"
          />
          <ExperienceUnit
            logo={semverCalcLogo}
            colour="#FFF"
            title="Semver-calc"
            link="https://semver-calc.now.sh"
            timeperiod="2018"
            subtitle="A tool to learn semantic versioning in ⬡.js better"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
