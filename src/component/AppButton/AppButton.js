import React from 'react'
import { styled } from '@mui/material/styles'

const ButtonComponent = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    backgroundColor: props?.backgroundColor ? props.backgroundColor : "green",
    textAlign: props?.textAlign ? props.textAlign : "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: props?.color ? props.color : "black",
    fontWeight: props?.fontWeight ? props.fontWeight : "400",
    fontSize: props?.fontSize ? props.fontSize : "3%",
    borderRadius: props?.borderRadius ? props.borderRadius : "3%",
    border: props?.border ? `1px solid ${props.border}` : "",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: props?.hoverbackgroundColor ? props.hoverbackgroundColor : "none",
        border: props?.hoverborder ? `1px solid ${props.hoverborder}` : "",
        cursor: "pointer"
    }
}))
// const Div = styled("div", {
//     shouldForwardProp: (props) => ({ ...props }),
// })((props) => ({
// backgroundColor:"green",
// display:"flex",
// justifyContent:"center",
// alignItems:"center",
// height:"20vh"

// }))

export const AppButton = ({
    height,
    width,
    backgroundColor,
    text,
    textAlign,
    color,
    fontWeight,
    borderRadius,
    fontSize,
    border,
    hoverbackgroundColor,
    hoverborder
}) => {
    return <ButtonComponent
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        textAlign={textAlign}
        color={color}
        fontWeight={fontWeight}
        borderRadius={borderRadius}
        fontSize={fontSize}
        border={border}
        hoverbackgroundColor={hoverbackgroundColor}
        hoverborder={hoverborder}
    >
        {text}
    </ButtonComponent>
}
export default AppButton
