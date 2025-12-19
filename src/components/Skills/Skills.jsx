import {Box, Icon, Stack, Typography} from '@mui/material';
import {SiCss3, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiReact} from 'react-icons/si';

import {FaJava} from "react-icons/fa";
import './Skills.css';

import React from 'react';

const Skills = () => {
    return (
        <>
            <Stack className='icons'>
                <Typography variant='h4'>My Skills</Typography>
                <Box>
                    <Typography variant='h5'>Programming Languages</Typography>
                    <ul>
                        <Icon className={'icon'}>
                            <FaJava/>
                        </Icon>
                        <Icon className='icon'>
                            <SiJavascript/>
                        </Icon>
                    </ul>
                </Box>
                <Box paddingTop={"6px"}>
                    <Typography variant='h5'>Other</Typography>
                    <ul>
                        <Icon className='icon'>
                            <SiReact/>
                        </Icon>
                        <Icon className='icon'>
                            <SiCss3/>
                        </Icon>
                        <Icon className='icon'>
                            <SiHtml5/>
                        </Icon>
                        <Icon className='icon'>
                            <SiMongodb/>
                        </Icon>
                        <Icon className='icon'>
                            <SiMysql/>
                        </Icon>
                        <Icon className='icon'>
                            <SiGit/>
                        </Icon>
                    </ul>
                </Box>

            </Stack>
        </>
    );
};

export default Skills;
