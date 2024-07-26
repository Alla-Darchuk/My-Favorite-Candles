declare module 'vue-carousel-3d' {
    import { PluginFunction } from 'vue';
  
    export interface Carousel3dProps {
      count?: number;
      perspective?: number;
      space?: number;
      display?: number;
      loop?: boolean;
      animationSpeed?: number;
      dir?: string;
      width?: number;
      height?: number;
      border?: number;
      autoplay?: boolean;
      autoplayTimeout?: number;
      clickToNext?: boolean;
      disable3d?: boolean;
      minSwipeDistance?: number;
      inverseScaling?: boolean;
      controlsVisible?: boolean;
      controlsPrevHtml?: string;
      controlsNextHtml?: string;
      controlsWidth?: number;
      controlsHeight?: number;
      clickable?: boolean;
    }
  
    export const Carousel3d: PluginFunction<Carousel3dProps>;
    export const Slide: any;
  }