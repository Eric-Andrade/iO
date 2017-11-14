import React, { Component } from 'react';
import styled from 'styled-components/native';
import { FlatList, Alert, Platform, Dimensions, StatusBar } from 'react-native';
import { colors } from '../../utils/constants';
import Touchable from '@appandflow/touchable';
import MenuItem from '../../commons/MenuItem/MenuItem';
import items from '../../utils/menu';

const itemWidth = Dimensions.get('window').width;

const Root = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 30
`;
const MenuContainer = styled.View`
    flex: 1;
`;
const T = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontSize: 16
`;
const T2 = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontSize: 12
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: { top: 15, bottom: 15, right: 15, left: 15 }
}) `
`;

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: 3
        }
    }

    _hello (){
        Alert.alert('¡Hello world!');
    }

    render() {
        return (
            <Root>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <T>Welcome to iO</T>
                <MenuContainer>
                 <FlatList
                        numColumns={this.state.columns}
                        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
                        renderItem={
                            ({item}) => (
                                <Touch onPress={this._hello}>
                                    <MenuItem  itemWidth={(itemWidth - 60 * this.state.columns)/this.state.columns} />
                                </Touch>
                            )
                        }
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustContentInsets={false}
                    />
                </MenuContainer>
            </Root>  
        );
    }
}

export default HomeScreen;