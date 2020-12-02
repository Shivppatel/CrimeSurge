import React from 'react'
import { ContentItem, ContentTitle } from '../AboutSection/AboutElements'
import {DocContainer, DocTitle, DocWrapper, IntroductionContent, AccountContent, VisualContent, VisualExportContent, ScopeContent, CLContent} from './DocumentationElements'

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

                <ScopeContent>
                    <ContentItem>
                        <ContentTitle>Scope of The Data Provider</ContentTitle>
                    </ContentItem>
                </ScopeContent>

                <CLContent>
                    <ContentItem>
                        <ContentTitle>Copyright and Legal</ContentTitle>
                    </ContentItem>
                </CLContent>
            </DocWrapper>
        </DocContainer>
    )
}

export default Documentation