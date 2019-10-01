import React from 'react'
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export default () => (<Result
    status="500"
    title="500"
    subTitle="Oups, nous avons rencontré une erreur inattendue"
    extra={
        <Link to="/">
            <Button type="primary">Retour à l'accueil</Button>
        </Link>
    }
/>);