// Type declaration for react-pannellum-next
declare module 'react-pannellum-next' {
  import { ComponentType } from 'react';

  export interface HotspotProps {
    pitch: number;
    yaw: number;
    type: 'info' | 'scene' | 'custom';
    text: string;
    sceneId?: string;
    URL?: string;
  }

  export interface PanoramaViewerProps {
    imagePath: string;
    hotSpots?: HotspotProps[];
    viewerProps?: {
      autoRotate?: number;
      hfov?: number;
      pitch?: number;
      yaw?: number;
      showControls?: boolean;
      compass?: boolean;
    };
  }

  export const PanoramaViewer: ComponentType<PanoramaViewerProps>;
  const defaultExport: ComponentType<PanoramaViewerProps>;
  export default defaultExport;
}