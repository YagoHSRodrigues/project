"use client";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { Card } from '@/components/ui/card';

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
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
          {({ signOut, user }) => {
            useEffect(() => {
              if (user) {
                router.push('/');
              }
            }, [user]); // Só executa quando o `user` muda
            return null;
          }}
        </Authenticator>
      </Card>
    </div>
  );
}