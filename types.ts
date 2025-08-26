// Fix: Import React to resolve the "Cannot find namespace 'React'" error.
import React from 'react';

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}