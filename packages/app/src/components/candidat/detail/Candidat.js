import React from "react";
import { Table, Spin, Empty, Button } from "antd";
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import "./Candidat.css";

const getCandidat = loader('./getCandidat.gql');

const Candidat = ({ id }) => {
    const { loading, error, data } = useQuery(getCandidat, {
        variables: { id }
    });

    if (loading) {
        return <Spin />;
    }
    return <span>{candidat.lastname}</span>
};