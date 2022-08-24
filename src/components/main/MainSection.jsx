import React from 'react';
import PropTypes from 'prop-types';

import { GridItem } from '@chakra-ui/react';

import ConversationTabs from './ConversationTabs';

export default function MainSection(props) {
    const { tabIndex, handleSwitchTab } = props;

    return (
        <GridItem
            w='100%'
            minH='5rem'
            pt='2rem'
            gridRow='1 / span 3'
            gridColumn={['2 / span 2', '2 / span 3']}>
            <ConversationTabs
                tabIndex={tabIndex}
                handleSwitchTab={handleSwitchTab} />
        </GridItem>
    )
}

MainSection.propTypes = {
    tabIndex: PropTypes.number,
    handleSwitchTab: PropTypes.func
}
