import React, { useState, useRef, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Dummy song data
  const song = {
    title: 'Sample Song',
    artist: 'Unknown Artist',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Replace with actual audio URL
    duration: 271 // Duration in seconds
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Playback failed", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      return () => {
        audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current?.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0] / 100);
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
    if (audioRef.current) {
      audioRef.current.currentTime = (value[0] / 100) * song.duration;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / song.duration) * 100);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, song.duration);
    }
  };

  const skipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
    } else {
      setVolume(0.5);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-br from-gray-900 to-black p-4 backdrop-blur-md bg-white/10 border-white/20 border-t z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1544510359-e96399753e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Album Cover" className="w-12 h-12 rounded mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-white">{song.title}</h3>
            <p className="text-sm text-muted-foreground">{song.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button onClick={skipBack} className="text-gray-500 hover:text-white transition-colors duration-200">
            <SkipBack className="h-6 w-6" />
          </button>
          <button onClick={handlePlayPause} className="text-gray-500 hover:text-white transition-colors duration-200">
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </button>
          <button onClick={skipForward} className="text-gray-500 hover:text-white transition-colors duration-200">
            <SkipForward className="h-6 w-6" />
          </button>
        </div>

        {/* Volume & Progress */}
        <div className="flex items-center gap-4 w-1/4">
          <button onClick={toggleMute} className="text-gray-500 hover:text-white transition-colors duration-200">
            {volume > 0 ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
          <Slider
            defaultValue={[volume * 100]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            aria-label="volume"
            className="w-24"
          />
          <span className="text-xs text-muted-foreground">{formatTime(audioRef.current?.currentTime || 0)} / {formatTime(song.duration)}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full mt-2">
          <Slider
            defaultValue={[progress]}
            max={100}
            step={0.1}
            onValueChange={handleProgressChange}
            aria-label="progress"
            className="w-full"
          />
        </div>
      </div>
      <audio ref={audioRef} src={song.src} preload="metadata" />
    </div>
  );
};

export default Player;