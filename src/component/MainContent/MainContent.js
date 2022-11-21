import React from 'react'
import { styled } from '@mui/material/styles'
import AppButton from '../AppButton/AppButton'

const TextComponent = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    backgroundColor: props?.backgroundColor ? props.backgroundColor : "green",
    textAlign: props?.textAlign ? props.textAlign : "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
}))

export const Text = styled("span", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({

    display: "block",
    color: props?.color ? props.color : "black",
    fontWeight: props?.fontWeight ? props.fontWeight : "200",
    fontSize: props?.fontSize ? props.fontSize : "3%",
    textAlign: props?.textAlign ? props.textAlign : "left",
    paddingLeft: props?.paddingLeft ? props.paddingLeft : "10px",
    paddingBottom: props?.paddingBottom ? props.paddingBottom : "10px",

}))
export const Wrapper = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: '300px',
    margin: props?.margin ? props.margin : "",
}))

export const MainText = ({
    height,
    width,
    backgroundColor,
    color,
    fontWeightHead,
    fontWeightText,
    fontSizeHead,
    fontSizeText,
    text,
    head,
    button,
    textButton1,
    backgroundColorButton1,
    border1,
    heightButton1,
    textAlign1,
    widthButton1,
    borderRadiusButton1,
    fontWeightButton1,
    fontSizeButton1,
    color1,
    textButton2,
    backgroundColorButton2,
    border2,
    heightButton2,
    textAlign2,
    widthButton2,
    borderRadiusButton2,
    fontWeightButton2,
    fontSizeButton2,
    color2,
    textAlignHead,
    textAlignText,
    margin,
    hoverbackgroundColorYellow,
    hoverbackgroundColorWhite,
    hoverborderYellow,
    hoverborderWhite,
    paddingleft


}) => {

    return <TextComponent
        height={height}
        width={width}
        backgroundColor={backgroundColor}
    >
        <Text
            paddingLeft={paddingleft}
            color={color}
            fontSize={fontSizeHead}
            fontWeight={fontWeightHead}
            textAlign={textAlignHead}
        >{head}
        </Text>
        <Text
            paddingLeft={paddingleft}
            color={color}
            fontSize={fontSizeText}
            fontWeight={fontWeightText}
            textAlign={textAlignText}
        >{text}
        </Text>
        <Wrapper margin={margin}>
            {button ?
                <AppButton
                    height={heightButton1}
                    width={widthButton1}
                    backgroundColor={backgroundColorButton1}
                    border={border1}
                    borderRadius={borderRadiusButton1}
                    fontWeight={fontWeightButton1}
                    text={textButton1}
                    fontSize={fontSizeButton1}
                    textAlign={textAlign1}
                    color={color1}
                    hoverbackgroundColor={hoverbackgroundColorYellow}
                    hoverborder={hoverborderYellow}
                />

                : ""}
            {button ?
                <AppButton
                    height={heightButton2}
                    width={widthButton2}
                    backgroundColor={backgroundColorButton2}
                    border={border2}
                    borderRadius={borderRadiusButton2}
                    fontWeight={fontWeightButton2}
                    text={textButton2}
                    fontSize={fontSizeButton2}
                    textAlign={textAlign2}
                    color={color2}
                    hoverbackgroundColor={hoverbackgroundColorWhite}
                    hoverborder={hoverborderWhite}
                />
                : ""}
        </Wrapper>

    </TextComponent>
}
export default MainText