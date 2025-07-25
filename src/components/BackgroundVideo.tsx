import React from 'react';
import { StyleSheet } from 'react-native';
import { VideoView, VideoSource } from 'expo-video';

type BackgroundVideoProps = {
  source: VideoSource;
};

export default function BackgroundVideo({ source }: BackgroundVideoProps) {
  return (
    <VideoView
      style={StyleSheet.absoluteFill}
      source={source}
      nativeControls={false}
      allowsFullscreen={false}
      allowsPictureInPicture={false}
      isMuted
      shouldPlay
      isLooping
      resizeMode="scaleToAspectFit"
      pointerEvents="none"
    />
  );
}
