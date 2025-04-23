import { Suspense } from 'react';
import FormPageWrapper from './FormPageWrapper';
export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <FormPageWrapper />
    </Suspense>
  );
}