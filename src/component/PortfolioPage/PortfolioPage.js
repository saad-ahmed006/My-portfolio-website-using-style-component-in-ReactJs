import AppButton from '../../component/AppButton/AppButton';
import MainText from '../../component/MainContent/MainContent';
function Portfolio() {
    return (

        <>


            <AppButton
                height={"6vh"}
                width={"10%"}
                backgroundColor={"yellow"}
                borderColor={"green"}
                borderRadius={"5px"}
                fontWeight={"bold"}
                border text={"This is a text"}
                fontSize={"100%"}
                textAlign={"center"}
                color={"black"}

            />


            <MainText
                height={"33vh"}
                width={"30%"}
                 backgroundColor={"purple"}
                text={"HI,I AM A FREELANCER"}
                head={"REACT DEVELOPER"}
                fontSizeHead={"30px"}
                fontWeightHead={"bold"}
                fontSizeText={"20px"}
                borderColor={"green"}
                button={true}

            ></MainText>

        </>
    );
}

export default Portfolio;
