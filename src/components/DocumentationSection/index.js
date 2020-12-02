import React from 'react'
import { ContentItem, ContentTitle } from '../AboutSection/AboutElements'
import {DocContainer, DocTitle, DocWrapper, DocContent} from './DocumentationElements'

const Documentation = () => {
    return (
        <DocContainer id="documentation">
            <DocTitle>Documentation</DocTitle>
            <DocWrapper>
                <IntroductionContent>
                    <ContentItem>
                        <ContentTitle>Introduction</ContentTitle>
                        <h1>Documentation will go here</h1>
                    </ContentItem>
                </IntroductionContent>

                <AccountContent>
                    <ContentItem>
                        <ContentTitle>Account Setup</ContentTitle>
                    </ContentItem>
                </AccountContent>

                <VisualContent>
                    <ContentItem>
                        <ContentTitle>Advanced Visualations</ContentTitle>
                    </ContentItem>
                </VisualContent>

                <VisualExportContent>
                    <ContentItem>
                        <ContentTitle>Exporting Visualations</ContentTitle>
                    </ContentItem>
                </VisualExportContent>
            </DocWrapper>
        </DocContainer>
    )
}

export default Documentation