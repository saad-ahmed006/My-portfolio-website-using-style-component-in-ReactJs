import React from 'react'
import { styled } from '@mui/material/styles'

const NavbarComponent = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    height: props?.height ? props.height : "10%",
    width: props?.width ? props.width : "10%",
    color: props?.color ? props.color : "black",
    backgroundColor: props?.backgroundColor ? props.backgroundColor : "green",
}))

const Logo = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    fontSize: props?.fontSize ? props.fontSize : "20px",
    fontWeight: props?.fontWeight ? props.fontWeight : "400",
}))

const Menu = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({

}))

const Text = styled("p", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "inline ",
    fontSize: props?.fontSize ? props.fontSize : "20px",
    fontWeight: props?.fontWeight ? props.fontWeight : "400",
    "&:hover": {
        borderBottom: props?.borderBottom ? `3px solid ${props.borderBottom}` : "",
        cursor: "pointer",
    }
}))

const Wrapper = styled("div", {
    shouldForwardProp: (props) => ({ ...props }),
})((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    height: "100%"
}))

const Navbar = ({
    height,
    width,
    backgroundColor,
    color,
    LogoText,
    firstMenu,
    secondMenu,
    thirdMenu,
    forthMenu,
    logoFontSize,
    logoFontWeight,
    menuItemFontSize,
    menuItemFontWeight,
    hoverMenu

}) => {
    return <NavbarComponent height={height}
        width={width}
        backgroundColor={backgroundColor}
        color={color}
    >
        <Wrapper>
            <Logo fontSize={logoFontSize} fontWeight={logoFontWeight}>{LogoText}</Logo>
            <Menu >
                <Text borderBottom={hoverMenu} fontSize={menuItemFontSize} fontWeight={menuItemFontWeight} >{firstMenu} </Text>
                <Text borderBottom={hoverMenu} fontSize={menuItemFontSize} fontWeight={menuItemFontWeight}>{secondMenu}</Text>
                <Text borderBottom={hoverMenu} fontSize={menuItemFontSize} fontWeight={menuItemFontWeight}>{thirdMenu}</Text>
                <Text borderBottom={hoverMenu} fontSize={menuItemFontSize} fontWeight={menuItemFontWeight}>{forthMenu}</Text>
            </Menu>
        </Wrapper>
    </NavbarComponent>
}
export default Navbar