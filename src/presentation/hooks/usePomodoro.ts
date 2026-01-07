import { useState, useEffect, useRef, useCallback } from 'react';

export type PomodoroState = 'idle' | 'running' | 'paused';

export const usePomodoro = (
  workDuration: number = 25,
  breakDuration: number = 5
) => {
  const [state, setState] = useState<PomodoroState>('idle');
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    setState('running');
  }, []);

  const pause = useCallback(() => {
    setState('paused');
  }, []);

  const reset = useCallback(() => {
    setState('idle');
    setTimeLeft(workDuration * 60);
    setIsBreak(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [workDuration]);

  const skip = useCallback(() => {
    if (isBreak) {
      setIsBreak(false);
      setTimeLeft(workDuration * 60);
    } else {
      setIsBreak(true);
      setTimeLeft(breakDuration * 60);
    }
    setState('idle');
  }, [isBreak, workDuration, breakDuration]);

  useEffect(() => {
    if (state === 'running') {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Timer finished
            if (isBreak) {
              setIsBreak(false);
              setState('idle');
              return workDuration * 60;
            } else {
              setIsBreak(true);
              setState('idle');
              return breakDuration * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state, isBreak, workDuration, breakDuration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return {
    state,
    timeLeft,
    minutes,
    seconds,
    isBreak,
    start,
    pause,
    reset,
    skip
  };
};
