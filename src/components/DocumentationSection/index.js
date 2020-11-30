import React from 'react'
import {DocContainer, DocTitle, DocWrapper, DocContent} from './DocumentationElements'

const Documentation = () => {
    return (
        <DocContainer id="documentation">
            <DocTitle>Documentation</DocTitle>
            <DocWrapper>
                <DocContent>
                    <h1>Documentation will go here</h1>
                </DocContent>
            </DocWrapper>
        </DocContainer>
    )
}

export default Documentation