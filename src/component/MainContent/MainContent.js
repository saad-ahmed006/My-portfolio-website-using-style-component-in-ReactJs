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
    alignItems: "center",
    color: props?.color ? props.color : "black",
    fontWeight: props?.fontWeightText ? props.fontWeightText : "400",
    fontWeight: props?.fontWeightHead ? props.fontWeightHead : "400",
    fontSize: props?.fontSizeText ? props.fontSizeText : "3%",
    fontSize: props?.fontSizeHead ? props.fontSizeHead : "3%",

}))

export const Text = styled("span", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({

    display: "block",
    color: props?.color ? props.color : "black",
    fontWeight: props?.fontWeight ? props.fontWeight : "400",
    fontSize: props?.fontSize ? props.fontSize : "3%",
}))
export const Wrapper = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: '300px'

}))


export const MainText = ({
    height,
    width,
    backgroundColor,
    textAlign,
    color,
    fontWeightHead,
    fontWeightText,
    fontSizeHead,
    fontSizeText,
    text,
    head,
    button
}) => {

    return <TextComponent
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        textAlign={textAlign}
        color={color}
    >
        <Text
            fontSize={fontSizeHead}
            fontWeight={fontWeightHead}
        >{head}
        </Text>
        <Text
            fontSize={fontSizeText}
            fontWeight={fontWeightText}
        >{text}
        </Text>
        <Wrapper>
            {button ?
                <AppButton
                    height={"6vh"}
                    width={"45%"}
                    backgroundColor={"yellow"}
                    borderColor={"white"}
                    borderRadius={"2px"}
                    fontWeight={"bold"}
                    border text={"This is a text"}
                    fontSize={"20px"}
                    textAlign={"center"}
                    color={"black"} />
                : ""}
            {button ?
                <AppButton
                    height={"6vh"}
                    width={"45%"}
                    backgroundColor={"yellow"}
                    borderColor={"white"}
                    borderRadius={"2px"}
                    fontWeight={"bold"}
                    border text={"This is a text"}
                    fontSize={"20px"}
                    textAlign={"center"}
                    color={"black"} />
                : ""}
        </Wrapper>

    </TextComponent>
}
export default MainText