import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: red;
`;

export const ImageBackground = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 100%;
    position: absolute;
`;