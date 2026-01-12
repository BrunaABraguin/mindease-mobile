import ScreenWrapper from "@/components/ScreenWrapper";
import { useTheme } from "@/hooks/useTheme";
import {
  fontSize,
  fontWeight,
  radius,
  spacingX,
  spacingY,
} from "@/utils/theme";
import { Ionicons, Octicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Timer() {
  const { colors } = useTheme();

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [hasStarted, setHasStarted] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [startTimestamp, setStartTimestamp] = useState<number | null>(null);
  const [totalDuration, setTotalDuration] = useState(25 * 60);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleTimerComplete = useCallback(() => {
    setStartTimestamp(null);

    if (isBreak) {
      if (completedSessions < 4) {
        setIsBreak(false);
        setTimeLeft(25 * 60);
        setTotalDuration(25 * 60);
      } else {
        resetAll();
        return;
      }
    } else {
      setCompletedSessions((prev) => prev + 1);
      setIsBreak(true);
      setTimeLeft(5 * 60);
      setTotalDuration(5 * 60);
    }
  }, [isBreak, completedSessions]);

  useEffect(() => {
    if (isRunning && startTimestamp) {
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTimestamp) / 1000);
        const remaining = Math.max(0, totalDuration - elapsed);

        setTimeLeft(remaining);

        if (remaining === 0) {
          setIsRunning(false);
          handleTimerComplete();
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning, startTimestamp, totalDuration, handleTimerComplete]);

  const startTimer = () => {
    const now = Date.now();
    setStartTimestamp(now - (totalDuration - timeLeft) * 1000);
    setIsRunning(true);
    setHasStarted(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setStartTimestamp(null);
  };

  const resetSession = () => {
    setIsRunning(false);
    setStartTimestamp(null);
    if (isBreak) {
      setTimeLeft(5 * 60);
      setTotalDuration(5 * 60);
    } else {
      setTimeLeft(25 * 60);
      setTotalDuration(25 * 60);
    }
  };

  const resetAll = () => {
    setIsRunning(false);
    setHasStarted(false);
    setStartTimestamp(null);
    setTimeLeft(25 * 60);
    setTotalDuration(25 * 60);
    setCompletedSessions(0);
    setIsBreak(false);
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: spacingX._40,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: spacingY._60,
            left: spacingX._30,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={16}
            color={colors.graphic.gold}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: spacingY._90,
            right: spacingX._40,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={12}
            color={colors.graphic.gold}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: "35%",
            left: spacingX._20,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={14}
            color={colors.graphic.gold}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: "55%",
            right: spacingX._25,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={10}
            color={colors.graphic.gold}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: spacingY._160,
            left: spacingX._35,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={13}
            color={colors.graphic.gold}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: spacingY._135,
            right: spacingX._60,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={15}
            color={colors.graphic.gold}
          />
        </View>

        <Text
          style={{
            fontSize: fontSize._80,
            fontWeight: fontWeight._300,
            color: colors.text.primary,
            textAlign: "center",
            marginBottom: spacingY._30,
            letterSpacing: 2,
          }}
        >
          {formatTime(timeLeft)}
        </Text>

        <View
          style={{
            alignItems: "center",
            marginBottom: spacingY._30,
          }}
        >
          <Octicons name="sparkle-fill" size={24} color={colors.graphic.gold} />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: spacingX._20,
            marginBottom: spacingY._100,
          }}
        >
          {[0, 1, 2, 3].map((index) => (
            <View
              key={index}
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor:
                  index < completedSessions
                    ? colors.cognitive.timerFocus
                    : colors.border.light,
                borderWidth: 2,
                borderColor:
                  index < completedSessions
                    ? colors.cognitive.timerFocus
                    : colors.border.medium,
              }}
            />
          ))}
        </View>

        {hasStarted ? (
          <View
            style={{
              flexDirection: "row",
              gap: spacingX._40,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={isRunning ? pauseTimer : startTimer}
              style={{
                backgroundColor: "transparent",
                padding: spacingX._15,
                borderRadius: radius._25,
                borderWidth: 1,
                borderColor: colors.border.medium,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={isRunning ? "pause" : "play"}
                size={24}
                color={colors.text.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={resetSession}
              style={{
                backgroundColor: "transparent",
                padding: spacingX._15,
                borderRadius: radius._25,
                borderWidth: 1,
                borderColor: colors.border.medium,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="refresh" size={24} color={colors.text.primary} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={resetAll}
              style={{
                backgroundColor: "transparent",
                padding: spacingX._15,
                borderRadius: radius._25,
                borderWidth: 1,
                borderColor: colors.semantic.error,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="close" size={24} color={colors.semantic.error} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={startTimer}
            style={{
              backgroundColor: "transparent",
              padding: spacingX._20,
              borderRadius: radius._50,
              borderWidth: 2,
              borderColor: colors.text.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="play" size={32} color={colors.text.primary} />
          </TouchableOpacity>
        )}

        {hasStarted && (
          <Text
            style={{
              fontSize: fontSize._16,
              color: colors.text.muted,
              marginTop: spacingY._40,
              textAlign: "center",
            }}
          >
            {isBreak ? "Tempo de pausa" : "Tempo de foco"}
          </Text>
        )}
      </View>
    </ScreenWrapper>
  );
}
