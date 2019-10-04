import React, { useMemo } from 'react'
import { Card } from 'antd';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types'

import './SkillsCard.css'

const commonProps = {
    margin: { top: 10, right: 10, bottom: 20, left: 100 },
    padding: 0.2,
    labelTextColor: 'inherit:darker(1.4)',
    enableLabel: false,
    isInteractive: false,
    axisBottom: null,
    colors: d => d.data.color,
    maxValue: 100,
    minValue: 0,
};

const colorScheme = [
    "rgb(165, 0, 38)",
    "rgb(215, 48, 39)",
    "rgb(244, 109, 67)",
    "rgb(253, 174, 97)",
    "rgb(254, 224, 139)",
    "rgb(255, 255, 191)",
    "rgb(217, 239, 139)",
    "rgb(166, 217, 106)",
    "rgb(102, 189, 99)",
    "rgb(26, 152, 80)",
    "rgb(0, 104, 55)"
];

const skillValueToColor = (skillValue) => {
    const index = parseInt(Math.min(skillValue / 100, 1) * colorScheme.length - 1);
    return colorScheme[index];
};

const nivoFormatter = skills => Object.entries(skills)
    .sort(([, valueA], [, valueB]) => valueA < valueB)
    .map(([skillName, value]) => ({
        skillName,
        value,
        color: skillValueToColor(value)
    }));

const SkillsCard = ({ skills }) => {
    const orderedSkills = useMemo(() => nivoFormatter(skills), [skills]);
    return (
        <Card title="Compétences" className="lls-skills-card">
            <ResponsiveBar
                {...commonProps}
                indexBy="skillName"
                data={orderedSkills}
                layout="horizontal"
                enableGridY={false}
                enableGridX={false}
            />
        </Card>
    )
};

SkillsCard.propTypes = {
    skills: PropTypes.object.isRequired
}

export default SkillsCard;