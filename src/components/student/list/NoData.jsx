import React, { useState } from 'react'
import { Empty, Button } from 'antd';

import { CreateForm } from '../forms';

const NoData = () => {
    const [isCreateFormVisible, setCreateFormVisibility] = useState(false);
    return (
        <Empty
            style={{ padding: 100 }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={"Vous n'avez pas d'élèves"}
        >
            <CreateForm
                isFormVisible={isCreateFormVisible}
                setFormVisibility={setCreateFormVisibility}
            />
            <Button type="primary" onClick={() => setCreateFormVisibility(true)}>Créer</Button>
        </Empty>
    );
};

export default NoData;