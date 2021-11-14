import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import PageLoader from 'components/PageLoader'

// Create a client
const queryClient = new QueryClient()

const Providers: React.FC = ({ children }) => {
    return (
        <Suspense fallback={<PageLoader />}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Suspense>
    )
}

export default Providers
