import React from 'react'
import { Card } from 'antd';
import { ResponsiveLine } from '@nivo/line'
import PropTypes from 'prop-types'

import './ActivityCard.css'

const ActivityCard = ({ activity }) => (
    <Card title="Activité" className="lls-activity-card">
        {activity.length === 0
        ? <div className="lls-activity-card__not-applicable">n/a</div>
        :<ResponsiveLine
            data={[{ id: "activity", data: activity}]}
            margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
            animate={true}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
            }}
            axisLeft={{
                legend: 'heures',
                legendOffset: 12,
            }}
            colors={{scheme: "category10"}}
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 1 day',
                legend: '',
                legendOffset: -12,
            }}
            useMesh={true}
            enableSlices={false}
        />
        }
    </Card>
)

ActivityCard.propTypes = {
    activity: PropTypes.array.isRequired
}

export default ActivityCard;