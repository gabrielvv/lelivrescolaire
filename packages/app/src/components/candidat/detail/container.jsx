import React from "react";
import { Spin } from "antd";
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import Candidat from './Candidat';
import { InternalError } from "../../errors";

const getCandidat = loader('./getCandidat.gql');

const CandidatContainer = ({ match }) => {
    const { loading, error, data } = useQuery(getCandidat, {
        variables: { id: match.params.candidatId }
    });

    if (loading) {
        return <Spin />;
    }

    if (error) {
        return <InternalError />
    }

    return <Candidat {...data}/>;
};

export default CandidatContainer;