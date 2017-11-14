import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Root = styled.View`
    flex: 1;
`;
const CardContainer = styled.View`
    flexDirection: column;
    alignItems: center;
    justifyContent: center;
    padding: 1px;
    margin: 10px;
    height: ${Platform.OS === 'ios' ? 75 : 70};
    borderRadius: 5;
    backgroundColor: transparent;
    borderWidth: 1;
    borderColor: ${props => props.theme.PRIMARYRGBA};
`;
const ImageService = styled.Image`
    marginVertical: 3;
    padding: 10px;
    height: ${Platform.OS === 'ios' ? 40 : 40};
    width: ${Platform.OS === 'ios' ? 40 : 40};
`;
const TextContainer = styled.Text`
    color: ${props => props.theme.WHITE};
    fontSize: 12
`;

function ServiceCard({itemWidth}){
    
    return(
        <Root>
            <CardContainer style={{width: itemWidth}}>
                <ImageService source={require('../../../assets/icontem.png')}/>
                <TextContainer>item</TextContainer>
            </CardContainer>
        </Root>
    )
}

export default ServiceCard;