import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, title = 'The Power of Out-Of-Home Media' }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-brand-orange-500 animate-pulse" />
            <h3 id="video-modal-title" className="text-white font-semibold text-sm uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="Brand Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-5 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400">
          <span>THREEANGLES — Showcasing Real-World Media Impact</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
