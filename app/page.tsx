"use client";

import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Home } from '@/app/home';

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full p-6">
        <Authenticator
          initialState="signIn"
          signUpAttributes={['email']}
          components={{
            Header() {
              return (
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold">Task Manager</h1>
                  <p className="text-muted-foreground">Sign in to manage your tasks</p>
                </div>
              );
            },
            
          }}
        >
          <Home />
        </Authenticator>
      </Card>
    </div>
  );
}