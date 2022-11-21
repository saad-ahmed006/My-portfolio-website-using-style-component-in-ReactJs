import React from 'react'
import { styled } from '@mui/material/styles'
// import Image from '../../component/Assets/project1.png'
import MainText from '../MainContent/MainContent'
import Color from '../Theme/Theme'


const Container = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    backgroundColor: props?.backgroundColor ? props.backgroundColor : "green",
    paddingTop: "15px",

  
}))
const DivImage = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    backgroundColor: props?.backgroundColor ? props.backgroundColor : "green",
    margin: ' 10px auto',
    overflow: 'hidden'

}))
const Margin = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    marginTop: props?.margin ? props.margin : "10px",
}))

const Card = ({
    height,
    width,
    backgroundColor,
    imageheight,
    imagewidth,
    divimagewidth,
    divimageheight,
    TopButtonMargin,
    text,
    head,
    srcpath,

}) => {
    return <Container
        height={height}
        width={width}
        backgroundColor={backgroundColor}
    >
        <DivImage width={divimagewidth} height={divimageheight}>

            <img width={imagewidth} height={imageheight} src={srcpath} alt="" />
        </DivImage>

        <Margin margin={TopButtonMargin}>
            <MainText
                // paddingLeft={paddingleft}
                height={"33vh"}
                width={"100%"}
                backgroundColor={"none"}
                color={"white"}
                text={text}
                head={head}
                fontSizeHead={"25px"}
                fontWeightHead={"bold"}
                fontWeightText={"600"}
                fontSizeText={"19px"}
                button={true}
                // textAlignHead={"center"}
                // textAlignText={"center"}
                hoverborderYellow={Color.yellow}


                margin={"  auto "}

                heightButton1={"6vh"}
                widthButton1={"40%"}
                backgroundColorButton1={Color.yellow}
                border1={"white"}
                borderRadiusButton1={"2px"}
                fontWeightButton1={"bold"}
                textButton1={"View"}
                fontSizeButton1={"18px"}
                textAlign1={"center"}
                color1={Color.black}
                hoverbackgroundColorYellow={"white"}
                hoverborderWhite={"white"}


                heightButton2={"6vh"}
                widthButton2={"40%"}
                backgroundColorButton2={"white"}
                border2={Color.yellow}
                borderRadiusButton2={"2px"}
                fontWeightButton2={"bold"}
                textButton2={"Source"}
                fontSizeButton2={"18px"}
                textAlign2={"center"}
                color2={Color.black}
                hoverbackgroundColorWhite={Color.yellow}



            ></MainText>
        </Margin>
    </Container>
}

export default Card


