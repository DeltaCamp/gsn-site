import React from 'react'

import { DynamicApolloWrapper } from 'lib/components/DynamicApolloWrapper';
import { MainLayout } from 'lib/components/layout/MainLayout'
import { AddressLinkForm } from 'lib/components/AddressLinkForm'
import { Section } from 'lib/components/layout/Section'

const RelayHubsIndex = function() {
  return (
    <MainLayout>
      <DynamicApolloWrapper>
        <Section>
          <AddressLinkForm
            title='Access Relay Hub'
            formatUrl={(address) => `/relay-hubs/${address}`}
          />
        </Section>
      </DynamicApolloWrapper>
    </MainLayout>
  )
}

export default RelayHubsIndex;