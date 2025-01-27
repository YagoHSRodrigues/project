"use client";

import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';

// Configure Amplify with retry options
Amplify.configure({
  ...config,
  API: {
    ...config.API,
    retry: {
      maxAttempts: 3,
      backoff: 'exponential'
    }
  }
}, { ssr: true });

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}