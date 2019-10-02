/* eslint-disable react/prop-types */
import React from 'react'
import { Spin, Empty, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import lodashNoop from 'lodash/noop';

const withLoadingErrorData = (Component) => {
    const WrappedComponent = ({
        loading,
        error,
        data,
        extractPropsFromData = lodashNoop,
        nilCheck = lodashNoop,
        emptyCheck = lodashNoop
    }) => {
        if (loading) {
            return <Spin />;
        }

        if (error) {
            console.error(error);
            return <Redirect to="/500" />;
        }

        if (!data || nilCheck(data)) {
            return <Redirect to="/404" />;
        }

        if (emptyCheck(data)) {
            return (
                <Empty
                    style={{ padding: 100 }}
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={"Vous n'avez pas d'élèves"}
                >
                    <Button type="primary">Créer</Button>
                </Empty>
            );
        }

        const props = extractPropsFromData(data);

        return <Component {...props} />;
    };
    return WrappedComponent;
}

export default withLoadingErrorData;