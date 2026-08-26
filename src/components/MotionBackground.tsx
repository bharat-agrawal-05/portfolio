import React from 'react';

export const MotionBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle floating ambient orb 1 */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl animate-float-slow" />

      {/* Subtle floating ambient orb 2 */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl animate-float-reverse" />

      {/* Subtle floating ambient orb 3 */}
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-3xl animate-float-slow" />
    </div>
  );
};
