import React from "react";
import { Tag, Divider, Avatar, Icon, Progress } from "antd";
import { Link } from 'react-router-dom';
import lodashIsEmpty from 'lodash/isEmpty';

const sessionStatusToIconMapper = {
    TO_BE_DEFINED: {
        type: 'file-exclamation',
        theme: 'twoTone',
        twoToneColor: 'red',
    },
    DRAFT: {
        type: 'form',
        theme: 'twoTone',
        twoToneColor: 'grey',
    },
    OPEN: {
        type: 'schedule',
        theme: 'twoTone',
        twoToneColor: '#52c41a',
    },
    IN_PROGRESS: {
        type: 'loading'
    },
    FINISHED: {
        type: 'check-circle',
        theme: 'twoTone',
        twoToneColor: '#52c41a',
    },
    CLOSED: {
        type: 'stop',
        theme: 'twoTone',
        twoToneColor: 'orange',
    },
};

const start = [
    {
        title: 'Réussite',
        key: 'currentSessionSuccessRate',
        dataIndex: 'currentSession',
        className: 'column-session-success',
        render: ({ exercises, successRate }) => (
            <Progress
                width={50}
                type="circle"
                format={percent => lodashIsEmpty(exercises) ? 'n/a' : percent + '%'}
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={successRate}
            />
        )
    }
    // {
    //     title: '',
    //     key: 'avatar',
    //     dataIndex: 'initials',
    //     render: initials => (
    //         <Avatar style={{ backgroundColor: '#87d068' }} >{initials}</Avatar>
    //     ),
    // },
];

const end = [
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: constraints => (
            <span>
                {constraints.map(tag => {
                    return (
                        <Tag color={'geekblue'} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Session',
        key: 'currentSessionStatus',
        dataIndex: 'currentSession',
        className: 'column-session-status',
        render: ({ status }) => (
            <Icon {...sessionStatusToIconMapper[status]} style={{ fontSize: '24px' }} />
        ),
    },
    {
        title: 'Actions',
        key: 'action',
        dataIndex: 'id',
        render: (id, record) => (
            <span>
                <Link to={`/candidat/${id}`}>Edit</Link>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];

export { start, end };