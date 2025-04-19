'use client';
import Link from 'next/link';
import React from 'react';
import { SparklesIcon } from 'lucide-react';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from './ui/button';

function Dasboard() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;

  return (
    <Link href={'/dashboard'}>
      <Button className="gap-2 font-medium" size={'sm'}>
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default Dasboard;
