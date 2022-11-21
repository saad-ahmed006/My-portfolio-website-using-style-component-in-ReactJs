import React from 'react'
import { styled } from '@mui/material/styles'
import Image3 from '../../component/Assets/intro-bg.jpg'
import Navbar from '../Navbar/Navbar'

const MainComponent = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    // opacity:props?.opacity ? props.opacity: "",
    backgroundImage: `url(${Image3})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}))
const Opacity = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

}))
const Text = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    color: props?.color ? props.color : "black",
    fontSize: props?.fontSize ? props.fontSize : "3%",
    fontWeight: props?.fontWeight ? props.fontWeight : "200",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

const Main = ({
    text,
    height,
    width,
    opacitywidth,
    opacityheight,
    textheight,
    textwidth,
    textColor,
    fontSizeText,
    fontWeightText,
    textCondition



}) => {

    return <MainComponent
        height={height}
        width={width}

    >

        <Opacity width={opacitywidth}
            height={opacityheight}>
            <Navbar
                width={"100%"}
                height={"10vh"}
                LogoText={"POrTfOlIo"}
                firstMenu={"Home"}
                secondMenu={"About "}
                thirdMenu={"Services"}
                forthMenu={"Contact Us"}
                paddingLeft={"20px"}
                menuItemFontSize={"20px"}
                menuItemFontWeight={"bold"}
                logoFontSize={"40px"}
                logoFontWeight={"bold"}
                backgroundColor={"none"}
                color={"white"}
                hoverMenu={"white"}
            ></Navbar>
            {textCondition?
            <Text width={textwidth}
                height={textheight}
                color={textColor}  
                fontSize={fontSizeText}
                fontWeight={fontWeightText}>
                <p>{text}</p>
            </Text>
:""}
        </Opacity>
    </MainComponent>

}
export default Main