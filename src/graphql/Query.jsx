import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import PropTypes from 'prop-types'
import { Spin } from 'antd';
import { Redirect } from 'react-router-dom';

const isNil = (data) => Object.values(data).some(value => !value);

const Query = ({ render, query, variables }) => {
    const { loading, error, data } = useQuery(query, {
        variables
    });

    if (loading) {
        return <Spin />;
    }

    if (error) {
        console.error(error);
        return <Redirect to="/500" />;
    }

    if (!data || isNil(data)) {
        return <Redirect to="/404" />;
    }

    return (
        <React.Fragment>
            {data ? render({ data }) : null}
        </React.Fragment>
    )
}

Query.propTypes = {
    render: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    variables: PropTypes.object
}

export default Query;
