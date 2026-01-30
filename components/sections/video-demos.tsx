"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

interface Video {
  duration: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    duration: "01:24",
    title: "Work Order CMMS Insights - Manager View",
    description: "Asset health, budget visibility, and workload insights for organizations with an existing CMMS.",
    thumbnail: "/images/video-thumbnails/thumb-1.jpg",
    videoUrl: "/videos/demos/1. Work Order CMMS Insights - Manager View.mp4",
  },
  {
    duration: "02:10",
    title: "Work Order CMMS Insights – Technician View (Field Team AI Assistant)",
    description: "Site orientation, SOP access, and on-site field support for technicians (applicable to all utilities).",
    thumbnail: "/images/video-thumbnails/thumb-2.jpg",
    videoUrl: "/videos/demos/2. Work Order CMMS Insights- Technician View.mp4",
  },
  {
    duration: "00:45",
    title: "Alarm & Operational Data Insights",
    description: "View alarms or sensor data and instantly surface relevant insights from CMMS records, work orders, and captured field knowledge.",
    thumbnail: "/images/video-thumbnails/thumb-3.jpg",
    videoUrl: "/videos/demos/3. Alarm and Operational Data Insights.mp4",
  },
  {
    duration: "01:50",
    title: "Work Order System in a Box – Manager View",
    description: "End-to-end workflow management for organizations without a CMMS or formal work order system.",
    thumbnail: "/images/video-thumbnails/thumb-4.jpg",
    videoUrl: "/videos/demos/4. Work Order System in a Box - Manager View.mp4",
  },
  {
    duration: "01:15",
    title: "Work Order System in a Box – Technician View",
    description: "Executing workflows while capturing field information and operational insights.",
    thumbnail: "/images/video-thumbnails/thumb-5.jpg",
    videoUrl: "/videos/demos/5. Work Order System in a Box- Technician View.mp4",
  },
  {
    duration: "02:30",
    title: "Quick Capture of Unstructured Information",
    description: "Enables teams to capture and share insights using audio, video, or photos, without filling out forms. Field staff can quickly record asset-related or data-related observations directly from the field.",
    thumbnail: "/images/video-thumbnails/thumb-6.jpg",
    videoUrl: "/videos/demos/6. Teamsolve - Quick Capture of Unstructured Information.mp4",
  },
];

export function VideoDemos() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Small delay before clearing selected video to allow dialog close animation
    setTimeout(() => setSelectedVideo(null), 200);
  };

  return (
    <>
      <section className="w-full bg-white py-12 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10" id="demo-videos">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            {/* Title and Description */}
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center text-4xl font-bold leading-tight text-text-primary">
                See Knowledge Twin in Action
              </h2>
              <p className="font-poppins font-light max-w-3xl text-center text-base lg:text-lg leading-relaxed text-text-muted">
                Watch short walkthroughs showing how data insights, workflow automation, and field support work for your utility teams.
              </p>
            </div>

            {/* CTA Button - Matching Figma Design */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl border border-text-primary bg-white px-2.5 py-1.5 transition-all hover:bg-gray-50"
            >
              <span className="text-base font-bold leading-5 text-text-primary">
                Get Started Today
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-text-primary transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4 text-white" strokeWidth={2} />
              </div>
            </Link>
          </motion.div>

          {/* Video Grid */}
          <div className="flex w-full flex-wrap justify-center gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleVideoClick(video)}
                className="w-full cursor-pointer overflow-hidden rounded-xl border border-video-border bg-white shadow-sm transition-all hover:shadow-lg sm:w-[calc(50%-1rem)] lg:w-96"
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden">
                  <video
                    src={`${video.videoUrl}#t=30`}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 backdrop-blur-sm">
                    <span className="text-xs leading-tight text-white">{video.duration}</span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white hover:shadow-xl">
                      <Play className="ml-0.5 h-6 w-6 fill-video-play text-video-play" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold leading-snug text-text-tertiary">
                    {video.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="max-w-[90vw] border-0 bg-black p-6 sm:max-w-[80vw] lg:max-w-[1200px]"
          showCloseButton={false}
        >
          {selectedVideo && (
            <div className="relative w-full">
              {/* Accessible Title for Screen Readers */}
              <DialogTitle className="sr-only">
                {selectedVideo.title}
              </DialogTitle>

              {/* Close Button */}
              <DialogClose
                onClick={handleCloseDialog}
                className="absolute -right-12 top-0 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogClose>

              {/* Video Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <video
                  controls
                  autoPlay
                  className="h-full w-full"
                  controlsList="nodownload"
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="mt-4 bg-black">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
