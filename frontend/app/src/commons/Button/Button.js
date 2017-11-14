import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../utils/constants'

const Button = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
})`
    backgroundColor: transparent;
    justifyContent: center;
    alignItems: center;
    height: 50;
    width: 75;
    padding: 10px;
    borderRadius: 5;
    borderWidth: 1;
    borderColor: ${props => props.theme.PRIMARY};
    margin: 10px
`;

export default function SimpleButton({ children, onPress, disabled }){
    return (
        <Button onPress={onPress} disabled={disabled} >
            {children}
        </Button>
    )
}