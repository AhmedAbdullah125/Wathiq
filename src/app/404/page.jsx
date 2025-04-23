'use client';
import React from 'react';
import { Suspense } from 'react';

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     fff
    </Suspense>
  );
}