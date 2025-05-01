'use client';

import { CartProvider } from '@/contexts/CartContext';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Something went wrong</p>
    </div>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <CartProvider>
        {children}
      </CartProvider>
    </ErrorBoundary>
  );
}
