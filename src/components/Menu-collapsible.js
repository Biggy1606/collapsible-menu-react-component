import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styled from "styled-components";

//---------------------------------------------------------------------------------
const StyledButton = styled.button`
    width: ${(props) => props.tabWidth};
    display: block;
    cursor: pointer;
    color: white;
    background-color: ${(props) => props.backgroundColor};
    border: 0;
    text-align: left;
    padding: 0px;
    margin: 0px;
    border: 0px solid;
    /* height: 60px; */
    min-height: 48px;
    font-size: 15px;
    outline: none;
    border-radius: 0;
    &:hover {
        background-color: #101010;
    }
    & img {
        width: ${(props) => props.tabWidth};
        display: block;
        margin: 0px;
        padding: 0px;
    }
`;
const StyledContent = styled.div`
    width: ${(props) => props.tabWidth};
    margin: 0px;
    padding: 0px;
    display: block;
    overflow: hidden;
    background-color: #f1f1f1;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    &.active {
        max-height: ${(props) => props.scrollHeight + "px"};
        /* border: 4px solid red; */
    }
    & p {
        padding: 0px 10px;
    }
`;
//---------------------------------------------------------------------------------
const MenuCollapsible = ({
    startValue = false,
    tabWidth = "100%",
    backgroundColor = "#505050",
    top = '',
    bottom = '',
    children = '',
}) => {
    const [getToggle, setToggle] = useState(startValue);
    const [getActiveStyle, setActiveStyle] = useState("");
    const [getScrollHeight, setScrollHeight] = useState(0);
    const contentRef = useRef(null);
    //-------------------------------
    useEffect(() => {
        setActiveStyle(getToggle ? "active" : "");
        setScrollHeight(contentRef.current.scrollHeight);
    }, [getToggle]);

    useLayoutEffect(() => {}, [getToggle]);
    //-------------------------------
    const clickFunc = () => {
        setToggle(!getToggle);
        console.log(getScrollHeight);
    };
    //-------------------------------
    return (
        <div>
            <StyledButton
                backgroundColor={backgroundColor}
                tabWidth={tabWidth}
                onClick={() => clickFunc()}
            >
                {top}
            </StyledButton>
            <StyledContent
                className={getActiveStyle}
                isActive={getToggle}
                scrollHeight={getScrollHeight}
                ref={contentRef}
                tabWidth={tabWidth}
            >
                {children}
            </StyledContent>
            <StyledButton
                backgroundColor={backgroundColor}
                tabWidth={tabWidth}
                onClick={() => clickFunc()}
            >
                {bottom}
            </StyledButton>
        </div>
    );
};
export default MenuCollapsible;
